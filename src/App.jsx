import React, { useState } from "react";
import Header from "./Section/Header";
import UserInput from "./Section/UserInput";
import Results from "./Section/Results";

const App = () => {
  //State have been lifted from userinput jsx to app
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <div className="mx-auto text-center">
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="text-white text-3xl">
          ⚠ Please enter a duration greater than 0
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
};

export default App;
