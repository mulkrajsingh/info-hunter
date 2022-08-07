import { Header } from "../Header";
import { ResultCards } from "../Result_Info_Card";
import { SearchField } from "../SearchField";

const Container = () => {
  return (
    <section className="container">
      <Header />
      <SearchField />
      <ResultCards />
    </section>
  );
};

export default Container;
