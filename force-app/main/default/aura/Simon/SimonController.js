({
    //gives first pattern
    StartSimon : function(component, event, helper) {
        component.set("v.GamePaused", false);
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        helper.GivePattern(component, simonPatternHolder, helper);
    },

    //checks for pattern match
    SimonButtonClick : function(component, event, helper) {
        let gamePaused = component.get("v.GamePaused");
        //button won't work until start is pressed
        if(gamePaused == false){
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        helper.CheckPattern(component, simonPatternHolder, event, helper);
        }
    },
})