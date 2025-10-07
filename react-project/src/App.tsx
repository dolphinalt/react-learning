import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelection = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert>
        Hello <b>World</b>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelection}
      />
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        This is a button yay!
      </Button>
      {alertVisible && (
        <DismissableAlert
          onClose={() => {
            setAlertVisibility(false);
          }}
        ></DismissableAlert>
      )}
    </>
  );
}

export default App;
