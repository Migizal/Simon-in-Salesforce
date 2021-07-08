({
    myAction : function(component, event, helper) {

    },

    //handles
    SimonButtonClick : function(component, event, helper) {
        let simonPattern = component.get("v.SimonPattern");
        let userPattern = component.get("v.UserPattern");
        let buttonValue = event.getSource().get("v.value");

        userPattern.push(buttonValue);

        console.log(userPattern);

        //if(userPattern.length ==)
        //console.log(buttonEvent);

        

    }
})
