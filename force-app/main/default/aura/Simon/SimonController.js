({
    //gives pattern
    StartSimon : function(component, event, helper) {
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        helper.GivePattern(component, simonPatternHolder, helper);
    },

    //checks for pattern match
    SimonButtonClick : function(component, event, helper) {
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        helper.CheckPattern(component, simonPatternHolder, event, helper);
    },
})
