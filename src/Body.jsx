import { useState } from "react";
import { numbers,upperCaseLetters,lowerCaseLetters,specialCharacters } from "./Character";
const Body=()=>{
    const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(26)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
    function generatepassword(){
        if(!includeUpperCase && !includeLowerCase&& !includeNumbers&& !includeSymbols){
            alert("To generate password you must select atleast one checkbox");
        }else{
            let characterList=passwordLength;
            if(includeUpperCase){
                characterList+=upperCaseLetters;
            }
            if(includeLowerCase){
                characterList+=lowerCaseLetters;
            }
            if(includeNumbers){
                characterList+=numbers;
            }
            if(includeSymbols){
                characterList+=specialCharacters;
            }
            let newPasswood="";
            for(let i=0;i<passwordLength;i++){
                const characterIndex = Math.floor(Math.random() * characterList.length)
                newPasswood = newPasswood + characterList.charAt(characterIndex)
                // newPasswood=Math.floor(Math.random()*characterList.length);
            }
            setPassword(newPasswood);
        }
    }
    
    return (
        <div className="container">
      <h2>Password Generator</h2>
      <input type="text" className='pass-input' value={password} readOnly />
      <div className="length">
        <p>Password length</p>
        <input type="number" onChange={(e)=>setPasswordLength(e.target.value)} defaultValue={26} max="26" min="6" />
      </div>
      <div className="upper">
        <p>Add Uppercase Letters</p>
        <input type="checkbox" name="uppercase" onChange={(e)=>setIncludeUpperCase(e.target.checked)}/>
      </div>
      <div className="lower">
        <p>Add Lowercase Letters</p>
        <input type="checkbox" name="lowercase" onChange={(e)=>setIncludeLowerCase(e.target.checked)} />
      </div>
      <div className="number">
        <p>Include Numbers</p>
        <input type="checkbox" name="number" onChange={(e)=>setIncludeNumbers(e.target.checked)} />
      </div>
      <div className="symbol">
        <p>Include Symbols</p>
        <input type="checkbox" name="symbol" onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
      </div>
      <button onClick={()=>generatepassword()}>Generate Password</button>
    </div>
    
    )
}
export default Body;