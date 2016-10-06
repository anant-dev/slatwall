module.exports = {
  /*
	Adds step in between the execution of a step
	@param script: JSON File
	@param step: Block Step to insert in between the steps in the file
	@return JSON file with the step added
  */
  addStepInBetween : function (script, step) {
    var array_components = new Object();
    var input_type = this.get_input_types();     
    for(var key in script) {
    	var jsonFileSize = script[key].length;
    	if(key == "steps") {
    		var counter = 1;
    		if (step['type'] === 'script') {
    			for(var i = 1; i < jsonFileSize; i++) {
        			if(counter == i) {
        				script[key].splice(i, 0,step);
        				counter = counter + 2;
        			} 
            	}   			
    		} else if (step['type'] === 'waitForElementPresent'){
    			for(var i = 0; i < jsonFileSize; i++) {
    				if(input_type.indexOf(script[key][i]['type']) > -1) {
    					script[key].splice(i, 0,{"type":"waitForElementPresent","locator":script[key][i]['locator']});
    					i++;
    					jsonFileSize++;
    				}        			
            	}
    		}
        	
        }   
    }
    return script;
	},
	/*
	gets all possible input types
	@return Array with all possible input types
  */
	get_input_types : function () {
		var input_type =  ["clickElement", "doubleClickElement", "mouseOverElement", "setElementText", "sendKeysToElement","setElementSelected","setElementNotSelected","clearSelections","submitElement","dragToAndDropElement","clickAndHoldElement","releaseElement"];
	    return input_type;
	}
};

 