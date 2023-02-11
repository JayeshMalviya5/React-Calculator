import React from "react";

function Input({handleInput}) {
  return (
    <div className="input">
      <div>
        <input type="text" name="num1" placeholder="Num1" onChange={handleInput}/>
      </div>
      <div>
        <input type="text" name="num2" placeholder="Num2" onChange={handleInput}/>
      </div>
    </div>
  );
}

export default Input;
