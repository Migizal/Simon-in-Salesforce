({
    //increases level and calls method to set new button on current pattern
    NextLevel : function(component, simonPatternHolder, helper) {
        let buttonColors = component.get("v.ButtonColors");
        let levelUp = component.get("v.LevelCounter");
        component.set("v.SimonPatternHolder", simonPatternHolder);
        component.set("v.LevelCounter", levelUp+1);
        helper.GivePattern(component,simonPatternHolder, helper);

    },

   
    //Add next button in pattern
    GivePattern : function(component, simonPatternHolder, helper){
        let buttonColors = component.get("v.ButtonColors");
        let j = 0;
        simonPatternHolder.push(buttonColors[Math.floor(Math.random() * buttonColors.length)]);

        //show simon pattern
        function myLoop(){
            setTimeout(function(){
                let currentPatternButton = component.find(simonPatternHolder[j]);
                $A.util.removeClass(currentPatternButton, "slds-transition-hide");
                helper.playSound(component, simonPatternHolder, j, helper);
                $A.util.removeClass(currentPatternButton, "slds-transition-show");
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
    },

    CheckPattern : function(component, simonPatternHolder, event, helper){
        let emptyArray = [];
        let userPattern = component.get("v.UserPattern");
        let buttonValue = event.getSource().get("v.value");
        let getUserClickSound = $A.get('$Resource.SimonSounds') + '/'+ buttonValue +'.mp3';
        let playUserClickSound = new Audio(getUserClickSound);
        playUserClickSound.play();
        userPattern.push(buttonValue);
        let patternMatch = true;
        
            for(let i = 0; i < userPattern.length; i++){

                if(userPattern[i] != simonPatternHolder[i]) {
                    helper.RestartSimon(component, helper);
                    patternMatch = false;
                    break; 
                }else if(userPattern[i] == simonPatternHolder[i] && i+1 == simonPatternHolder.length){
  
                }else if(userPattern[i] == simonPatternHolder[i]){
                    continue;

                }   
            }
            if(patternMatch == true && userPattern.length == simonPatternHolder.length){
                component.set("v.UserPattern", emptyArray);
                helper.NextLevel(component, simonPatternHolder, helper);
            }
    },
    //show game over message
    showToast : function(component) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Game Over!",
            "message": "You Made it to Level! " + component.get("v.LevelCounter") 
        });
        toastEvent.fire();
    },

    //when pattern is missed everything resets
    RestartSimon : function(component, helper){
        helper.showToast(component);
        let emptyArray = [];
        component.set("v.GamePaused", true);
        component.set("v.SimonPatternHolder", emptyArray);
        component.set("v.UserPattern", emptyArray);
        component.set("v.LevelCounter", 1);  
    },

    playSound: function(component, simonPatternHolder, j, helper){
        // play button sounds
        console.log(j);
        let getSound = $A.get('$Resource.SimonSounds') + '/'+ simonPatternHolder[j] +'.mp3';
        let playSound = new Audio(getSound);
        playSound.play();
    }
    
})