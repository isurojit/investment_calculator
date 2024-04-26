import React from "react";
import { calculateInvestmentResults } from "../util/investmentCalulation";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <div>
      <h1>Results</h1>
    </div>
  );
};

export default Results;
