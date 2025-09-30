import React, { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    console.log("useMEmo");
    return 부하();
  }, []);
  // [] 아무것도 deps로 전달하지 않았을 때에는
  // 콜 백함수의 연산이 컴포넌트가 최초의 렌더링 되었을 때 딱 한번만 일어난다.
  // 이 연산은 딱 한 번만 수행되도록 바뀌었다.

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;
