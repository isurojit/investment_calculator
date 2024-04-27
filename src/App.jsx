import React, { useState } from "react";
import Header from "./Section/Header";
import UserInput from "./Section/UserInput";
import Results from "./Section/Results";
import Footer from "./Section/Footer";

const App = () => {
  //State have been lifted from userinput jsx to app
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
      const updatedValue = newValue === "" ? "" : +newValue;
      return {
        ...prevState,
        [inputIdentifier]: +updatedValue,
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
      <Footer />
    </div>
  );
};

export default App;
