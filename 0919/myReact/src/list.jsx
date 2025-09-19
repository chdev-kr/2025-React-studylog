function App() {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const time = today.toLocaleTimeString();
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass" />
      <h1 style={someStyle}>연도: {year}</h1>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        월/일: {month}/{day}
      </h1>
      <h1 style={{ border: "1px solid black" }}>시간: {time}</h1>
    </div>
  );
}

export default App;
