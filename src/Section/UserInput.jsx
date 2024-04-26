import React, { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  //All the functions will be connected
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <section className="w-full max-w-lg mx-auto mt-4">
      <form className="form-control">
        <div className="input-container">
          <label className="label-style" htmlFor="initialInvestment">
            Initial Investment
          </label>
          <input
            className="input-style"
            id="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="label-style" htmlFor="annualInvestment">
            Annual Investment
          </label>
          <input
            className="input-style"
            id="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="label-style" htmlFor="expectedReturn">
            Expected Return
          </label>
          <input
            className="input-style"
            id="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="label-style" htmlFor="duration">
            Duration
          </label>
          <input
            className="input-style"
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            required
          />
        </div>
        <div className="w-full mt-4">
          <button className="btn-style" type="button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserInput;
