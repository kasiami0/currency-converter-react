import "./style.css"

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicz na PLN</legend>
            <p><label><span className="form__label">Waluta:</span>
                <select className="form__field" required>
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar amerykański</option>
                    <option value="CHF">Frank szwajcarski</option>
                    <option value="GBP">Funt brytyjski</option>
                </select></label></p>
            <p><label><span className="form__label">*Kwota:</span>
                <input className="form__field" type="number"
                step="0.01" min="1" required /></label></p>
            <footer>* - wymagane pola</footer>
        </fieldset>
        <button className="form__button">Przelicz</button>
    </form>
);

export default Form;