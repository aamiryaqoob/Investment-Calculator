
import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Reslts";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =  userInputs.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInputs(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue
      };
    })
  }

  
  return (
    <>
      <Header />
      <UserInput userInput={userInputs} onChange={handleChange} />
      {inputIsValid && <Results input={userInputs}/>}
      {!inputIsValid && <p className="center">Please enter a duration of greater than zero.</p>}
    </>
  )
}

export default App
