import React from "react";
import { useLanguage } from "../src";

const message = {
  en: "Hello World",
  id: "Apa Kabar",
};

const App = () => {
  const { getMessage, switchLanguage } = useLanguage();

  return (
    <>
      {getMessage(message)}
      <button onClick={switchLanguage}>Switch</button>
    </>
  );
};

export default App;
