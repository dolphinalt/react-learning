import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

const App = () => {
  return (
    <>
      <CardGrid>
        <Card title="Assignment 1" description="This is the first assignment" points={10} />
        <Card title="Assignment 2" description="This is the second assignment" points={20} />
        <Card title="Assignment 3" description="This is the third assignment" points={30} />
      </CardGrid>
    </>
  );
};

export default App;
