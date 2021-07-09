({
    NextLevel : function(component, simonPatternHolder, helper) {
        let buttonColors = component.get("v.ButtonColors");
        console.log("Next Level!!!")
        simonPatternHolder.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);
        component.set("v.SimonPatternHolder", simonPatternHolder);
        console.log("Next Level Pattern Below:");
        console.log(simonPatternHolder);
        /*let emptyArray = [];
        let simonPattern = component.get("v.SimonPattern");
        component.set("v.SimonPattern", emptyArray);
        component.set("v.SimonPatternHolder", simonPattern);
        console.log(simonPattern);
        */
    }
})
