import { useState, useMemo } from "react";
import copy from "copy-to-clipboard";
import "./App.css";

function replaceAll(str, mapObj) {
  const re = new RegExp(Object.keys(mapObj).join("|"), "g");

  return str.replace(re, function (matched) {
    return mapObj[matched];
  });
}

function translate(text) {
  const table = {
    O: "ø",
    A: "4",
    S: "5",
    I: "!",
    E: "3",
  };
  return replaceAll(text.toUpperCase(), table);
}

function App() {
  const [text, setText] = useState("");
  const translatedText = useMemo(() => translate(text), [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(translatedText);
  };

  return (
    <div className="App">
      <div>
        <textarea onChange={handleChange} value={text} />
        <textarea value={translatedText} disabled />
      </div>
      <button onClick={copyToClipboard}>Copy to clipboard</button>
    </div>
  );
}

export default App;
