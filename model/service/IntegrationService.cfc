/*

    Slatwall - An Open Source eCommerce Platform
    Copyright (C) 2011 ten24, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    Linking this library statically or dynamically with other modules is
    making a combined work based on this library.  Thus, the terms and
    conditions of the GNU General Public License cover the whole
    combination.
 
    As a special exception, the copyright holders of this library give you
    permission to link this library with independent modules to produce an
    executable, regardless of the license terms of these independent
    modules, and to copy and distribute the resulting executable under
    terms of your choice, provided that you also meet, for each linked
    independent module, the terms and conditions of the license of that
    module.  An independent module is a module which is not derived from
    or based on this library.  If you modify this library, you may extend
    this exception to your version of the library, but you are not
    obligated to do so.  If you do not wish to do so, delete this
    exception statement from your version.

Notes:

*/
component extends="HibachiService" persistent="false" accessors="true" output="false" {

	// Place holder properties that get populated lazily
	property name="settings" type="any";
	
	variables.integrationCFCs = {};
	variables.paymentIntegrationCFCs = {};
	variables.shippingIntegrationCFCs = {};
	variables.authenticationIntegrationCFCs = {};

	
	public void function clearActiveFW1Subsystems() {
		structDelete(variables, "activeFW1Subsystems");
	}
	
	public array function getActiveFW1Subsystems() {
		if( !structKeyExists(variables, "activeFW1Subsystems") ) {
			var afs = [];
			var integrations = this.listIntegration({fw1ActiveFlag=1, fw1ReadyFlag=1, installedFlag=1});
			for(var i=1; i<=arrayLen(integrations); i++) {
				arrayAppend(afs, {subsystem=integrations[i].getIntegrationPackage(), name=integrations[i].getIntegrationName()});
			}
			variables.activeFW1Subsystems = afs;
		}
		return variables.activeFW1Subsystems;
	}
	
	public any function getAllSettings() {
		if( !structKeyExists(variables, "allSettings") ) {
			variables.allSettings = {};
			var isl = this.getIntegrationSmartList();
			isl.addFilter('installedFlag', 1);
			var integrations = isl.getRecords();
			for(var i=1; i<=arrayLen(integrations); i++) {
				for(var settingName in integrations[i].getSettings()) {
					variables.allSettings['integration#integrations[i].getIntegrationPackage()##settingName#'] = integrations[i].getSettings()[ settingName ];
				}
			}
		}
		
		return variables.allSettings;
	}

	public any function getIntegrationCFC(required any integration) {
		if(!structKeyExists(variables.integrationCFCs, arguments.integration.getIntegrationPackage())) {
			var integrationCFC = createObject("component", "Slatwall.integrationServices.#arguments.integration.getIntegrationPackage()#.Integration").init();
			//populateIntegrationCFCFromIntegration(integrationCFC, arguments.integration);
			variables.integrationCFCs[ arguments.integration.getIntegrationPackage() ] = integrationCFC;
		}
		return variables.integrationCFCs[ arguments.integration.getIntegrationPackage() ];
	}

	public any function getAuthenticationIntegrationCFC(required any integration) {
		if(!structKeyExists(variables.authenticationIntegrationCFCs, arguments.integration.getIntegrationPackage())) {
			var integrationCFC = createObject("component", "Slatwall.integrationServices.#arguments.integration.getIntegrationPackage()#.Authentication").init();
			variables.authenticationIntegrationCFCs[ arguments.integration.getIntegrationPackage() ] = integrationCFC;
		}
		return variables.authenticationIntegrationCFCs[ arguments.integration.getIntegrationPackage() ];
	}

	public any function getPaymentIntegrationCFC(required any integration) {
		if(!structKeyExists(variables.paymentIntegrationCFCs, arguments.integration.getIntegrationPackage())) {
			var integrationCFC = createObject("component", "Slatwall.integrationServices.#arguments.integration.getIntegrationPackage()#.Payment").init();
			variables.paymentIntegrationCFCs[ arguments.integration.getIntegrationPackage() ] = integrationCFC;
		}
		return variables.paymentIntegrationCFCs[ arguments.integration.getIntegrationPackage() ];
	}
	
	public any function getShippingIntegrationCFC(required any integration) {
		if(!structKeyExists(variables.shippingIntegrationCFCs, arguments.integration.getIntegrationPackage())) {
			var integrationCFC = createObject("component", "Slatwall.integrationServices.#arguments.integration.getIntegrationPackage()#.Shipping").init();
			variables.shippingIntegrationCFCs[ arguments.integration.getIntegrationPackage() ] = integrationCFC;
		}
		return variables.shippingIntegrationCFCs[ arguments.integration.getIntegrationPackage() ];
	}
	
	public any function updateIntegrationsFromDirectory() {
		logHibachi("Update Integrations Started");
		var dirList = directoryList( expandPath("/Slatwall/integrationServices") );
		var integrationList = this.listIntegration();
		var installedIntegrationList = "";
		
		// Turn off the installed and ready flags on any previously setup integration entities
		for(var i=1; i<=arrayLen(integrationList); i++) {
			integrationList[i].setInstalledFlag(0);
			
			integrationList[i].setAuthenticationReadyFlag(0);
			integrationList[i].setCustomReadyFlag(0);
			integrationList[i].setFW1ReadyFlag(0);
			integrationList[i].setPaymentReadyFlag(0);
			integrationList[i].setShippingReadyFlag(0);
			
			if(isNull(integrationList[i].getAuthenticationActiveFlag())) {
				integrationList[i].setAuthenticationActiveFlag(0);
			}
			if(isNull(integrationList[i].getCustomActiveFlag())) {
				integrationList[i].setCustomActiveFlag(0);
			}
			if(isNull(integrationList[i].getFW1ActiveFlag())) {
				integrationList[i].setFW1ActiveFlag(0);
			}
			if(isNull(integrationList[i].getPaymentActiveFlag())) {
				integrationList[i].setPaymentActiveFlag(0);
			}
			if(isNull(integrationList[i].getShippingActiveFlag())) {
				integrationList[i].setShippingActiveFlag(0);
			}
			
			
		}
		
		// Loop over each integration in the integration directory
		for(var i=1; i<= arrayLen(dirList); i++) {
			
			var fileInfo = getFileInfo(dirList[i]);
			
			if(fileInfo.type == "directory" && fileExists("#fileInfo.path#/Integration.cfc") ) {
				
				var integrationPackage = listLast(dirList[i],"\/");
				var integrationCFC = createObject("component", "Slatwall.integrationServices.#integrationPackage#.Integration").init();
				var integrationMeta = getMetaData(integrationCFC);
				
				if(structKeyExists(integrationMeta, "Implements") && structKeyExists(integrationMeta.implements, "Slatwall.integrationServices.IntegrationInterface")) {
					
					var integration = this.getIntegrationByIntegrationPackage(integrationPackage, true);
					integration.setInstalledFlag(1);
					integration.setIntegrationPackage(integrationPackage);
					integration.setIntegrationName(integrationCFC.getDisplayName());
					
					var integrationTypes = integrationCFC.getIntegrationTypes();
					
					// Start: Get Integration Types
					for(var it=1; it<=listLen(integrationTypes); it++) {
						
						var thisType = listGetAt(integrationTypes, it);
						
						switch (thisType) {
							case "authentication": {
								integration.setAuthenticationReadyFlag(1);
								break;
							}
							case "custom": {
								integration.setCustomReadyFlag(1);
								break;
							}
							case "fw1": {
								integration.setFW1ReadyFlag(1);
								
								// Update the authentication subsystems
								var hibachiConfig = getApplicationValue('hibachiConfig');
								hibachiConfig.authenticationSubsystems = listAppend(hibachiConfig.authenticationSubsystems, integrationPackage);
								setApplicationValue('hibachiConfig', hibachiConfig);
								
								break;
							}
							case "payment": {
								var paymentCFC = createObject("component", "Slatwall.integrationServices.#integrationPackage#.Payment").init();
								var paymentMeta = getMetaData(paymentCFC);
								if(structKeyExists(paymentMeta, "Implements") && structKeyExists(paymentMeta.implements, "Slatwall.integrationServices.PaymentInterface")) {
									integration.setPaymentReadyFlag(1);
								}
								break;
							}
							case "shipping": {
								var shippingCFC = createObject("component", "Slatwall.integrationServices.#integrationPackage#.Shipping").init();
								var shippingMeta = getMetaData(shippingCFC);
								if(structKeyExists(shippingMeta, "Implements") && structKeyExists(shippingMeta.implements, "Slatwall.integrationServices.ShippingInterface")) {
									integration.setShippingReadyFlag(1);
								}
								break;
							}
						}
					}
					
					if(isNull(integration.getAuthenticationActiveFlag()) || (integration.getAuthenticationActiveFlag() && !integration.getAuthenticationReadyFlag())) {
						integration.setAuthenticationActiveFlag(0);
					}
					if(isNull(integration.getCustomActiveFlag()) || (integration.getCustomActiveFlag() && !integration.getCustomReadyFlag())) {
						integration.setCustomActiveFlag(0);
					}
					if(isNull(integration.getAuthenticationActiveFlag()) || (integration.getFW1ActiveFlag() && !integration.getFW1ReadyFlag())) {
						integration.setFW1ActiveFlag(0);
					}
					if(isNull(integration.getAuthenticationActiveFlag()) || (integration.getPaymentActiveFlag() && !integration.getPaymentReadyFlag())) {
						integration.setPaymentActiveFlag(0);
					}
					if(isNull(integration.getAuthenticationActiveFlag()) || (integration.getShippingActiveFlag() && !integration.getShippingReadyFlag())) {
						integration.setShippingActiveFlag(0);
					}
					
					
					// Call Entity Save so that any new integrations get persisted
					getHibachiDAO().save( integration );
					getHibachiDAO().flushORMSession();
					logHibachi("The Integration: #integrationPackage# has been registerd");
					
					// If this integration is active lets register all of its event handlers
					if( integration.getEnabledFlag() ) {
						logHibachi("The Integration: #integrationPackage# is 'enabled'");
						for(var e=1; e<=arrayLen(integrationCFC.getEventHandlers()); e++) {
							getHibachiEventService().registerEventHandler( integrationCFC.getEventHandlers()[e] );
						}
						if(arrayLen(integrationCFC.getEventHandlers())) {
							logHibachi("The Integration: #integrationPackage# has had #arrayLen(integrationCFC.getEventHandlers())# eventHandler(s) registered");	
						}
					}
				}
			}
		}
	}
	
	public array function getAdminLoginHTMLArray() {
		var returnArr = [];
		
		var isl = this.getIntegrationSmartList();
		isl.addFilter('authenticationActiveFlag', 1);
		
		var authInts = isl.getRecords();
		for(var i=1; i<=arrayLen(authInts); i++) {
			var intCFC = getAuthenticationIntegrationCFC(authInts[i]);
			var adminLoginHTML = intCFC.getAdminLoginHTML();
			if(len(trim(adminLoginHTML))) {
				arrayAppend(returnArr, adminLoginHTML);
			}
		}
		
		return returnArr;
	}
	
	// ===================== START: Logical Methods ===========================
	
	// =====================  END: Logical Methods ============================
	
	// ===================== START: DAO Passthrough ===========================
	
	// ===================== START: DAO Passthrough ===========================
	
	// ===================== START: Process Methods ===========================
	
	// =====================  END: Process Methods ============================
	
	// ====================== START: Save Overrides ===========================
	
	public any function saveIntegration() {
		if( structKeyExists(variables, "activeFW1Subsystems") ) {
			structDelete(variables, "activeFW1Subsystems");
		}
		getHibachiAuthenticationService().clearActionPermissionDetails();
		return super.save(argumentCollection=arguments);
	}
	
	// ======================  END: Save Overrides ============================
	
	// ==================== START: Smart List Overrides =======================
	
	// ====================  END: Smart List Overrides ========================
	
	// ====================== START: Get Overrides ============================
	
	// ======================  END: Get Overrides =============================
}