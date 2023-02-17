import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      initialAmount: +amount,
      resultAmount: amount * rate,
      currency,
    });
  };

  return (
    <Container>
      <Header header="Kalkulator walutowy" />
      <Form calculateResult={calculateResult} />
      <Result result={result} />
      <Footer
        footer="Krursy pochodzą ze strony nbp.pl z Tabeli nr 223/A/NBP/2022
          z dnia 2022-11-18"
      />
    </Container>
  );
}

export default App;
