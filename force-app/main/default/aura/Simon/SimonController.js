({
    StartSimon : function(component, event, helper) {
        let emptyArray = [];
        let simonPattern = component.get("v.SimonPattern");
        let buttonColors = component.get("v.ButtonColors");

        component.set("v.SimonPattern", emptyArray);
        simonPattern.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);
        component.set("v.SimonPatternHolder", simonPattern);
        console.log(simonPattern);

    },

    //handles
    SimonButtonClick : function(component, event, helper) {
        let emptyArray = [];
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        //let userPatternHolder = component.get("v.UserPatternHolder");
        //let simonPattern = component.get("v.SimonPattern");
        let userPattern = component.get("v.UserPattern");
        let buttonValue = event.getSource().get("v.value");
        //let patternMatch = true;
        userPattern.push(buttonValue);
        //UserPatternHolder.push(userPattern);

        console.log(userPattern);

        if(userPattern.length == simonPatternHolder.length){
            for(let i = 0; i < simonPatternHolder.length; i++){
                if(userPattern[i] == simonPatternHolder[i] && i+1 == simonPatternHolder.length){
                    console.log("Pattern Fully Matched...Next Level");
                    

                }else if(userPattern[i] == simonPatternHolder[i]){
                    continue;

                }
                 else if(userPattern[i] != simonPatternHolder[i]) {
                    console.log("Pattern Failed...Retry");
                    //patternMatch == false;
                    break;
                }
            }
            component.set("v.UserPattern", emptyArray);
            console.log("Round Done!");
        }
    },

    NextLevel: function(component, event, helper) {

        //Add another value to simonPattern
        //Play the simon pattern
        //call
      /*  let emptyArray = [];
        let simonPattern = component.get("v.SimonPattern");
        let buttonColors = component.get("v.ButtonColors");

        component.set("v.SimonPattern", emptyArray);
        simonPattern.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);
        component.set("v.SimonPatternHolder", simonPattern);
        console.log(simonPattern);
        */
    },
})
