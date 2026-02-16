import { useState, useEffect } from "react";
import { calculate } from "../utils/calculate";

type MortgageType = "repayment" | "interestOnly";

type Results = {
  setResults: React.Dispatch<
    React.SetStateAction<{ monthly: number; total: number } | null>
  >;
};

const LeftPanel = ({ setResults }: Results) => {
  const base = import.meta.env.BASE_URL;

  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [type, setType] = useState<MortgageType | "">("");

  const [errors, setErrors] = useState({
    amount: false,
    years: false,
    annualRate: false,
    type: false,
  });

  const [touched, setTouched] = useState({
    amount: false,
    years: false,
    annualRate: false,
    type: false,
  });

  // ✅ Centralized validation logic
  function validateField() {
    return {
      amount: amount.trim() === "" || isNaN(Number(amount)),
      years:
        years.trim() === "" || isNaN(Number(years)) || parseFloat(years) <= 0,
      annualRate: annualRate.trim() === "" || isNaN(Number(annualRate)),
      type: type.trim() === "",
    };
  }

  // ✅ Validate only touched fields
  useEffect(() => {
    const validation = validateField();

    const filteredErrors = {
      amount: touched.amount && validation.amount,
      years: touched.years && validation.years,
      annualRate: touched.annualRate && validation.annualRate,
      type: touched.type && validation.type,
    };

    setErrors(filteredErrors);
  }, [amount, years, annualRate, type, touched]);

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Mark all fields touched on submit
    const allTouched = {
      amount: true,
      years: true,
      annualRate: true,
      type: true,
    };

    setTouched(allTouched);

    const validation = validateField();
    setErrors(validation);

    const hasErrors = Object.values(validation).some(Boolean);
    if (hasErrors) return;

    const mortgage = {
      amount: parseFloat(amount),
      years: parseFloat(years),
      annualRate: parseFloat(annualRate),
      type,
    };

    const result = calculate(mortgage);
    setResults(result);
  }

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Mortgage Calculator</h1>
        <a href={base}>Clear All</a>
      </div>

      <form>
        {/* Mortgage Amount */}
        <div className={`form-group ${errors.amount ? "err" : ""}`}>
          <label htmlFor="amount">Mortgage Amount</label>
          <div className="input-group">
            <span className="err amount">This field is required</span>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setTouched((prev) => ({ ...prev, amount: true }));
              }}
            />
            <span className="left">£</span>
          </div>
        </div>

        {/* Term & Rate */}
        <div className="form-row">
          <div className={`form-group ${errors.years ? "err" : ""}`}>
            <label htmlFor="term">Mortgage Term</label>
            <div className="input-group">
              <span className="err amount">This field is required</span>
              <input
                type="text"
                id="term"
                value={years}
                onChange={(e) => {
                  setYears(e.target.value);
                  setTouched((prev) => ({ ...prev, years: true }));
                }}
              />
              <span className="right">years</span>
            </div>
          </div>

          <div className={`form-group ${errors.annualRate ? "err" : ""}`}>
            <label htmlFor="rate">Interest Rate</label>
            <div className="input-group">
              <span className="err amount">This field is required</span>
              <input
                type="text"
                id="rate"
                value={annualRate}
                onChange={(e) => {
                  setAnnualRate(e.target.value);
                  setTouched((prev) => ({ ...prev, annualRate: true }));
                }}
              />
              <span className="right">%</span>
            </div>
          </div>
        </div>

        {/* Mortgage Type */}
        <div className={`form-group ${errors.type ? "err" : ""}`}>
          <label>Mortgage Type</label>
          <div className="radio-group">
            <span className="err amount">This field is required</span>
            <label
              className={
                type === "repayment" ? "radio-label active" : "radio-label"
              }
            >
              <input
                type="radio"
                name="type"
                checked={type === "repayment"}
                onChange={() => {
                  setType("repayment");
                  setTouched((prev) => ({ ...prev, type: true }));
                }}
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
                onChange={() => {
                  setType("interestOnly");
                  setTouched((prev) => ({ ...prev, type: true }));
                }}
              />
              Interest Only
            </label>
          </div>
        </div>

        {/* Button */}
        <button type="submit" onClick={handleSubmit}>
          <img
            src={`${base}assets/images/icon-calculator.svg`}
            alt="Calculator icon"
          />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default LeftPanel;
