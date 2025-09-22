import { useState } from "react";
import Homepage from "./components/Homepage.jsx";
import Login from "./components/Login.jsx";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <Homepage setIsLogin={setIsLogin} />
  ) : (
    <Login user={user} setIsLogin={setIsLogin} />
  );
}

export default App;
