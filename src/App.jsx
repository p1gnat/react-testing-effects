import { useEffect } from "react";
import { ApiSelector } from "./components/ApiSelector";

const App = () => {
  useEffect(() => {
    ApiSelector().connect();
    return () => {
      ApiSelector().disconnect();
    };
  });
  return (
    <>
      <h1>Welcome to Connection</h1>
    </>
  );
};
export default App;
