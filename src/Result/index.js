import "./style.css"

const Result = ({ result }) => (
  <p className="result">
    {result ?
      <>
        {result.initialAmount.toFixed(2)} PLN
        = {result.resultAmount.toFixed(2)} {result.currency}
      </>
      : "💸 💰 💸 "}
  </p>
);

export default Result;