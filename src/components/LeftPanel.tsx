const LeftPanel = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Mortgage Calculator</h1>
        <a href="#">Clear All</a>
      </div>

      <form>
        {/* Mortgage Amount*/}
        <div className="form-group">
          <label htmlFor="amount">Mortgage Amount</label>
          <div className="input-group">
            <span>£</span>
            <input type="text" id="amount" />
          </div>
        </div>

        {/*<!-- Term & Rate -->*/}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="term">Mortgage Term</label>
            <div className="input-group">
              <input type="text" id="term" style={{ paddingLeft: "18px" }} />
              <span>years</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rate">Interest Rate</label>
            <div className="input-group">
              <input type="text" id="rate" style={{ paddingLeft: "18px" }} />
              <span>%</span>
            </div>
          </div>
        </div>

        {/* Mortgage Type */}
        <div className="form-group">
          <label>Mortgage Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="type" />
              Repayment
            </label>
            <label>
              <input type="radio" name="type" checked />
              Interest Only
            </label>
          </div>
        </div>

        {/* Button */}
        <button type="submit">
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
