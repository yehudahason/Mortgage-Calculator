const LeftPanel = () => {
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
            <input type="text" id="amount" value="300,000" />
          </div>
        </div>

        {/*<!-- Term & Rate -->*/}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="term">Mortgage Term</label>
            <div className="input-group">
              <input type="text" id="term" value="25" />
              <span>years</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rate">Interest Rate</label>
            <div className="input-group">
              <input type="text" id="rate" value="5.25" />
              <span>%</span>
            </div>
          </div>
        </div>

        {/* Mortgage Type */}
        <div className="form-group">
          <label>Mortgage Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="type" checked />
              Repayment
            </label>
            <label>
              <input type="radio" name="type" />
              Interest Only
            </label>
          </div>
        </div>

        {/* Button */}
        <button type="submit">Calculate Repayments</button>
      </form>
    </div>
  );
};

export default LeftPanel;
