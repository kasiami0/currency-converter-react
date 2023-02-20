import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";
import { currencies } from "./currencies";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      initialAmount: +amount,
      currency,
      resultAmount: amount * rate,
    });
  };

  return (
    <Container>
      <Clock />
      <Header header="Kalkulator walutowy" />
      <Form calculateResult={calculateResult} />
      <Result result={result} />
      <Footer />
    </Container>
  );
}

export default App;
