import React, { useState } from "react";
import Header from "./Section/Header";
import UserInput from "./Section/UserInput";
import Results from "./Section/Results";

const App = () => {
  //State have been lifted from userinput jsx to app
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });
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
      <Results input={userInput} />
    </div>
  );
};

export default App;
