({
    StartSimon : function(component, event, helper) {
        let emptyArray = [];
        //let simonPattern = component.get("v.SimonPattern");
        let simonPattern = ['green', 'blue', 'red', 'red', 'yellow'];
        let buttonColors = component.get("v.ButtonColors");
        //const timer = ms => new Promise(res => setTimeout(res, ms));
        component.set("v.SimonPattern", emptyArray);
        //simonPattern.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);

        let j = 0;
        //show simon pattern
        function myLoop(){
            setTimeout(function(){
                let currentPatternButton = component.find(simonPattern[j]);
                $A.util.removeClass(currentPatternButton, "slds-transition-hide");
                $A.util.removeClass(currentPatternButton, "slds-transition-show");
                console.log("Here: " + currentPatternButton);
                $A.util.addClass(currentPatternButton, "slds-transition-hide");
                setTimeout(function() {
                    $A.util.addClass(currentPatternButton, "slds-transition-show");;
                }, 750);
                
                j++;
                if(j < simonPattern.length){
                    myLoop();
                }
            }, 1250)
        }
        myLoop();

            component.set("v.SimonPatternHolder", simonPattern);
            console.log(simonPattern);
    },

    //handles
    SimonButtonClick : function(component, event, helper) {
        let emptyArray = [];
        let simonPatternHolder = component.get("v.SimonPatternHolder");
        let userPattern = component.get("v.UserPattern");
        let buttonValue = event.getSource().get("v.value");
        userPattern.push(buttonValue);
        console.log(userPattern);
        //let userPatternHolder = component.get("v.UserPatternHolder");
        //let simonPattern = component.get("v.SimonPattern");
        let patternMatch = true;
        //UserPatternHolder.push(userPattern);

        if(userPattern.length == simonPatternHolder.length){

            for(let i = 0; i < simonPatternHolder.length; i++){

                if(userPattern[i] == simonPatternHolder[i] && i+1 == simonPatternHolder.length){
                    console.log("Pattern Fully Matched");

                }else if(userPattern[i] == simonPatternHolder[i]){
                    continue;

                }
                 else if(userPattern[i] != simonPatternHolder[i]) {
                     console.log("Pattern Failed...Retry");
                     //display message asking to 'Try Again?' and two options, YES or NO. 
                     //(toggle helper class with message box and buttons to reset or re-render component)
                    patternMatch = false;
                    break;
                }
            }
            component.set("v.UserPattern", emptyArray);
            if(patternMatch == true){
                helper.NextLevel(component, simonPatternHolder, helper);
            }
        }
    },
})
