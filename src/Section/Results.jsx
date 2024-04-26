import React from "react";
import {
  calculateInvestmentResults,
  formatter,
} from "../util/investmentCalulation";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <div className="container">
      <div className="overflow-x-auto w-full">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="table-header">Year</th>
              <th className="table-header">Investment Value</th>
              <th className="table-header">Interest (Year)</th>
              <th className="table-header">Total Interest</th>
              <th className="table-header">Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((yearData) => {
              const totalIntrest =
                yearData.valueEndOfYear -
                yearData.annualInvestment * yearData.year -
                initialInvestment;

              const totalAmountInvested =
                yearData.valueEndOfYear - totalIntrest;
              return (
                <tr key={yearData.year}>
                  <td className="table-description">{yearData.year}</td>
                  <td className="table-description">
                    {formatter.format(yearData.valueEndOfYear)}
                  </td>
                  <td className="table-description">
                    {formatter.format(yearData.interest)}
                  </td>
                  <td className="table-description">
                    {formatter.format(totalIntrest)}
                  </td>
                  <td className="table-description">
                    {formatter.format(totalAmountInvested)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
