import React from "react";

const UserInput = ({ onChangeInput, userInput }) => {
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
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
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
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
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
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
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
            onChange={(e) => onChangeInput("duration", e.target.value)}
            required
          />
        </div>
      </form>
    </section>
  );
};

export default UserInput;
