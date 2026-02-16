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
        <div className="form-group err">
          <label htmlFor="amount">Mortgage Amount</label>
          <div className="input-group">
            <span className="left">£</span>
            <span className="err amount">This field is required</span>
            <input type="text" id="amount" />
          </div>
        </div>

        {/*<!-- Term & Rate -->*/}
        <div className="form-row">
          <div className="form-group err">
            <label htmlFor="term">Mortgage Term</label>
            <div className="input-group">
              <input type="text" id="term" style={{ paddingLeft: "18px" }} />
              <span className="right">years</span>
              <span className="err years">This field is required</span>
            </div>
          </div>

          <div className="form-group err">
            <label htmlFor="rate">Interest Rate</label>
            <div className="input-group">
              <input type="text" id="rate" style={{ paddingLeft: "18px" }} />
              <span className="right">%</span>
              <span className="err rate">This field is required</span>
            </div>
          </div>
        </div>

        {/* Mortgage Type */}
        <div className="form-group err">
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
            <span className="err radio">This field is required</span>
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
