import { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(() => console.log("⏰ " + text), 1000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
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
