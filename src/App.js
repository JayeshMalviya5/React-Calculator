import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Result from "./Components/Result";
function App() {
  const [input, setInput] = useState({
    num1: "",
    num2: "",
  });
  const [result, setResult] = useState({
    finalResult: "",
    valid: false,
    validityMessage: ""
  });
  const {num1,num2} = input;
  const handleInput = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    const updatedInput = {...input };
    updatedInput[name] = value;
    setInput(updatedInput);
  };
  
 function isNumeric(num1,num2){
  
    if(num1.match(/^[0-9.]+$/) && num2.match(/^[0-9.]+$/)){
      return true;
    }
    return false;
  }

  const handleResult = (event) =>{
    // console.log('working')
    parseFloat(num1);
    parseFloat(num2);
    const {name} = event.target;
    setResult({valid: false});
     if(!num1 || !num2){
        setResult({validityMessage: "Input field cannot be empty"});
        return;
     }else if(!isNumeric(num1,num2)){
      setResult({validityMessage: "Please enter valid inputs"});
      return;
     }else{
       setResult({
        valid: true,
        finalResult: eval(`${parseFloat(num1)} ${name} ${parseFloat(num2)}`),
        validityMessage: "Success : your result is shown above"
       })
     }
  }

  return (
    <div className="App">
      <Header></Header>
      <Input handleInput={handleInput}></Input>
      <Buttons handleResult = {handleResult}></Buttons>
      {result.valid && <Result finalResult = {result.finalResult}></Result>}
      {result.valid && <p style={{color: "green"}}>{result.validityMessage}</p>}

      {!result.valid && <p style={{color: "red"}}>{result.validityMessage}</p>}
    </div>
  );
}

export default App;
