const RightPanel = () => {
  return (
    <div className="results">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div className="result-card">
        <p>Your monthly repayments</p>
        <h3>£1,797.74</h3>
        <hr />
        <p>Total you'll repay over the term</p>
        <strong>£539,322.94</strong>
      </div>
    </div>
  );
};

export default RightPanel;
