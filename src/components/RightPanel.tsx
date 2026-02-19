type Results = { monthly: number; total: number; interest: number } | null;

const RightPanel = ({ results }: { results: Results }) => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="results">
      {results && !isNaN(results.monthly) && !isNaN(results.total) ? (
        <>
          <h2>Your results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>

          <div className="result-card">
            <p>Your monthly repayments</p>
            <h3>£{results.monthly.toFixed(2)}</h3>
            <hr />

            <p>Total interest you'll pay over the term</p>
            <strong>£{results.interest.toFixed(2)}</strong>
            <hr />
            <p>Total you'll repay over the term</p>
            <strong>£{results.total.toFixed(2)}</strong>
          </div>
        </>
      ) : (
        <div className="start">
          <img src={`${base}assets/images/illustration-empty.svg`} alt="" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click “calculate repayments” to see your what
            your monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
