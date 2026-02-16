import { useState } from "react";
import { calculate } from "../utils/calculate";
type Results = {
  setResults: React.Dispatch<
    React.SetStateAction<{ monthly: number; total: number } | null>
  >;
  results?: { monthly: number; total: number } | null;
};

const LeftPanel = ({ setResults }: Results) => {
  const base = import.meta.env.BASE_URL;
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({
    amount: false,
    years: false,
    annualRate: false,
    type: false,
  });

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    validate();
  }

  function validate() {
    const newErrors = {
      amount: amount.trim() === "" || isNaN(Number(amount)),
      years:
        years.trim() === "" || isNaN(Number(years)) || parseFloat(years) <= 0,
      annualRate: annualRate.trim() === "" || isNaN(Number(annualRate)),
      type: type.trim() === "",
    };
    setErrors(newErrors);
    const mortgage = {
      amount: parseFloat(amount),
      years: parseFloat(years),
      annualRate: parseFloat(annualRate),
      type,
    };
    const result = calculate(mortgage);
    setResults(result);
    console.log(result);
  }
  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Mortgage Calculator</h1>
        <a href="#">Clear All</a>
      </div>

      <form>
        {/* Mortgage Amount*/}
        <div className={`form-group ${errors.amount ? "err" : ""}`}>
          <label htmlFor="amount">Mortgage Amount</label>
          <div className="input-group">
            <span className="err amount">This field is required</span>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className="left">£</span>
          </div>
        </div>

        {/*<!-- Term & Rate -->*/}
        <div className="form-row">
          <div className={`form-group ${errors.years ? "err" : ""}`}>
            <label htmlFor="term">Mortgage Term</label>
            <div className="input-group">
              <input
                type="text"
                id="term"
                style={{ paddingLeft: "18px" }}
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
              <span className="right">years</span>
            </div>
            <span className="err years">This field is required</span>
          </div>

          <div className={`form-group ${errors.annualRate ? "err" : ""}`}>
            <label htmlFor="rate">Interest Rate</label>
            <div className="input-group">
              <input
                type="text"
                id="rate"
                style={{ paddingLeft: "18px" }}
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
              />
              <span className="right">%</span>
            </div>
            <span className="err rate">This field is required</span>
          </div>
        </div>

        {/* Mortgage Type */}
        <div className={`form-group ${errors.type ? "err" : ""}`}>
          <label>Mortgage Type</label>
          <div className="radio-group">
            <label
              className={
                type === "repayment" ? "radio-label active" : "radio-label"
              }
            >
              <input
                type="radio"
                name="type"
                checked={type === "repayment"}
                onChange={() => setType("repayment")}
              />
              Repayment
            </label>
            <label
              className={
                type === "interestOnly" ? "radio-label active" : "radio-label"
              }
            >
              <input
                type="radio"
                name="type"
                checked={type === "interestOnly"}
                onChange={() => setType("interestOnly")}
              />
              Interest Only
            </label>
          </div>
          <span className="err radio">This field is required</span>
        </div>

        {/* Button */}
        <button type="submit" onClick={handleSubmit}>
          {" "}
          <img
            src={`${base}assets/images/icon-calculator.svg`}
            alt="Calculator icon"
          />{" "}
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default LeftPanel;
