import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Clonmel", "Thurles", "Limerick"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
