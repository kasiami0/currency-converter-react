import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Header header="Kalkulator walutowy" />
      <Form />
      <Result />
      <Footer footer="Krursy pochodzą ze strony nbp.pl z Tabeli nr 223/A/NBP/2022 z dnia 2022-11-18" />
    </Container>
  );
}

export default App;
