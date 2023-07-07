import React from "react";
import "../App.css";
const PasswordStrengthNotification = ({password}) =>{


       const getPasswordStrength = () =>{

        const passwordLen = password.length;

        if(passwordLen<1)
        {
            return "";
        }else if(passwordLen<4)
        {
            return "Very Weak";
        }
        else if(passwordLen<8)
        {
            return "Poor";
        }
        else if(passwordLen<12)
        {
            return "Medium";
        }
        else {
    
            return "Very Strong";
        }

       };


       const passwordStrength = getPasswordStrength();
      // console.log("KKKKKK+"+passwordStrength)
       if(passwordStrength)
       return <div className="pswds">
           <span className="strength"> Strength : {passwordStrength}</span>
        </div>
       
};

export default PasswordStrengthNotification;