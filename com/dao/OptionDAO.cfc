/*

    Slatwall - An e-commerce plugin for Mura CMS
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
component extends="slatwall.com.dao.BaseDAO" {

	public any function getSmartList(required string entityName, struct data={}){
		var smartList = new Slatwall.com.utility.SmartList(entityName=arguments.entityName, data=arguments.data);
		
		smartList.addKeywordProperty(propertyIdentifier="optionCode", weight=9);
		smartList.addKeywordProperty(propertyIdentifier="optionName", weight=3);
		smartList.addKeywordProperty(propertyIdentifier="optionGroup_optionGroupName", weight="4");
		smartList.addKeywordProperty(propertyIdentifier="optionDescription", weight=1);
		
		return smartList;
	}
	
	// @hint checks if the passed if the option code of the passed in option is already in use within its option group
	public any function isDuplicateOptionCode( required any option ) {
		return arrayLen(ormExecuteQuery("from SlatwallOption where optionCode = :code and optionGroup = :group and optionID != :id", {code=arguments.option.getOptionCode(), group=arguments.option.getOptionGroup(), id=arguments.option.getOptionID()}));
	}
}
