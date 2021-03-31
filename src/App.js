import Card from "./Card";
import { useState } from "react";
import { useTransition, animated as a } from "react-spring";
import QuestionStack from "./components/questionStack";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <QuestionStack></QuestionStack>
    </div>
  );
}

export default App;
