import { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(text);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <>
      <h1>WHat to log?</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text && <p>{text}</p>}
    </>
  );
};
export default App;
