({
    NextLevel : function(component, simonPatternHolder, helper) {
        let buttonColors = component.get("v.ButtonColors");
        console.log("Next Level!!!")
        component.set("v.SimonPatternHolder", simonPatternHolder);
        console.log("Next Level Pattern Below:");
        console.log(simonPatternHolder);
        helper.GivePattern(component,simonPatternHolder, helper);
        /*let emptyArray = [];
        let simonPattern = component.get("v.SimonPattern");
        component.set("v.SimonPattern", emptyArray);
        component.set("v.SimonPatternHolder", simonPattern);
        console.log(simonPattern);
        */
    },

    GivePattern : function(component, simonPatternHolder, helper){
        //let emptyArray = [];
        //let simonPattern = component.get("v.SimonPattern");
        //let simonPattern = ['green', 'blue', 'red', 'red', 'yellow'];
        let buttonColors = component.get("v.ButtonColors");
        //const timer = ms => new Promise(res => setTimeout(res, ms));
        //component.set("v.SimonPattern", emptyArray);
        simonPatternHolder.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);

        let j = 0;
        //show simon pattern
        function myLoop(){
            setTimeout(function(){
                let currentPatternButton = component.find(simonPatternHolder[j]);
                $A.util.removeClass(currentPatternButton, "slds-transition-hide");
                $A.util.removeClass(currentPatternButton, "slds-transition-show");
                console.log("Here: " + currentPatternButton);
                $A.util.addClass(currentPatternButton, "slds-transition-hide");
                setTimeout(function() {
                    $A.util.addClass(currentPatternButton, "slds-transition-show");;
                }, 750);
                
                j++;
                if(j < simonPatternHolder.length){
                    myLoop();
                }
            }, 1250)
        }
        myLoop();

            component.set("v.SimonPatternHolder", simonPatternHolder);
            console.log(simonPatternHolder);
    },

    CheckPattern : function(component, simonPatternHolder, event, helper){
        let emptyArray = [];
        //let simonPatternHolder = component.get("v.SimonPatternHolder");
        //let userPatternHolder = component.get("v.UserPatternHolder");
        let userPattern = component.get("v.UserPattern");
        let buttonValue = event.getSource().get("v.value");
        userPattern.push(buttonValue);
        //userPatternHolder.push(buttonValue);
        console.log(userPattern);
        //let simonPattern = component.get("v.SimonPattern");
        let patternMatch = true;
        //UserPatternHolder.push(userPattern);
        
            for(let i = 0; i < userPattern.length; i++){

                if(userPattern[i] != simonPatternHolder[i]) {
                    component.set("v.UserPattern", emptyArray);
                    console.log("Pattern Failed...Retry");
                    //display message asking to 'Try Again?' and two options, YES or NO. 
                    //(toggle helper class with message box and buttons to reset or re-render component)
                    patternMatch = false;
                    break;
                }else if(userPattern[i] == simonPatternHolder[i] && i+1 == simonPatternHolder.length){
                        console.log("Pattern Fully Matched");
  
                }else if(userPattern[i] == simonPatternHolder[i]){
                    continue;

                }
                 
            }
            
            if(patternMatch == true && userPattern.length == simonPatternHolder.length){
                component.set("v.UserPattern", emptyArray);
                helper.NextLevel(component, simonPatternHolder, helper);
            }
    }

})
