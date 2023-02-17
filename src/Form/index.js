import "./style.css"
import { currencies } from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code)

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz na PLN</legend>
        <p><label>
          <span className="form__label">Waluta:</span>
          <select
            value={currency}
            onChange={(event => setCurrency(event.target.value))}
            className="form__field"
          >
            {currencies.map(currency => (
              <option key={currency.id} value={currency.code}>
                {currency.name}
              </option>
            ))};
          </select>
        </label></p>
        <p><label>
          <span className="form__label">*Kwota:</span>
          <input
            value={amount}
            onChange={(event => setAmount(event.target.value))}
            className="form__field"
            type="number"
            step="0.01"
            min="1"
            required
          />
        </label></p>
        <footer>* - wymagane pola</footer>
      </fieldset>
      <button className="form__button">Przelicz</button>
    </form>
  );
};

export default Form;