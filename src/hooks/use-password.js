import { useState } from "react";


const usePasswordGenerator = ()=>{

    const[password,setPassword]=useState("");
    const[errorMsg,setErrorMsg] = useState("");

    const generatePassword = (checkboxData,length)=>{

        let char = "";
        let genPassword = "";

        const selectedOption = checkboxData.filter((checkbox)=> checkbox.state);

        
        if(selectedOption.length===0)
        {
            setErrorMsg("Select At least one Option. ");
            setPassword("");
            return;
        }
        selectedOption.forEach((option)=>{
            switch(option.title){

                case "Include UpperCase Letters":
                    char = char + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include LowerCase Letters":
                    char = char + "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    char = char + "0123456789";
                    break;
                case "Include Symbols":
                    char = char + "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });

        for(let i=0;i<length;i++){

            const randomIndex = Math.floor(Math.random()*char.length);
            genPassword +=char[randomIndex]; 
        }

        setPassword(genPassword);
        setErrorMsg("");
    };

    
    return {password,errorMsg,generatePassword};
};

export default usePasswordGenerator;