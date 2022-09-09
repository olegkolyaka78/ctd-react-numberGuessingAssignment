import React from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {

  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const onChange = event.target.value;
    setCurrentGuess(onChange);
  }

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );

}

export default GuessControl;
