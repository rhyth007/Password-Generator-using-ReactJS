import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/use-password";
import PasswordStrengthNotification from "./component/strength";

function App() {
	const [length, setLength] = useState(4);
	const [checkboxData, setCheckboxData] = useState([
		{ title: "Include UpperCase Letters", state: false },
		{ title: "Include LowerCase Letters", state: false },
		{ title: "Include Numbers", state: false },
		{ title: "Include Symbols", state: false },
	]);

  const {password,errorMsg,generatePassword} = usePasswordGenerator();

  const [copied,setCopied] = useState(false);

	const handleCheckBoxCheck = (index) => {
		const updatedCheckBox = [...checkboxData];
		updatedCheckBox[index].state = !updatedCheckBox[index].state; //if true then false else true
		setCheckboxData(updatedCheckBox);
	};


  const handleCopy = ()=>{
      navigator.clipboard.writeText(password);

      setCopied(true);
      setTimeout(()=>{
        setCopied(false);
      },1000)
    
  }

	//eslint-disable-next-line

	return (
		<div className="App">
			{/* Password Text and Copy*/}

		
    	{ {password} &&	<div className="header">
			 <div className="title">{password}</div>
				<button className="copyBtn" onClick={() => {handleCopy()}}>
					 {copied?"Copied":"copy"}
				</button>
			</div>
    }

			<div className="charL">
				<span>
					<label>Character Length </label>
					<label>{length}</label>
				</span>
				<input
					type="range"
					min="4"
					max="20"
					value={length}
					onChange={(e) => {
						setLength(e.target.value);
					}}
				/>
			</div>

			<div className="checkBoxes">
				{checkboxData.map((checkbox, i) => {
					return (
						<div key={i}>
							<input
								type="checkbox"
								onChange={() => {
									handleCheckBoxCheck(i);
								}}
								checked={checkbox.state}
							/>
							<label>{checkbox.title}</label>
						</div>
					);
				})}
			</div>

      {<PasswordStrengthNotification password={password}/>}

      {errorMsg && <div className="ErrorMessage">{errorMsg}</div>}

			<button className="generateBtn"  onClick={()=>generatePassword(checkboxData,length)}>
				Generate Password
			</button>
		</div>
	);
}

export default App;
