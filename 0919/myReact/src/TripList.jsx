function TripList() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true, style: { backgroundColor: "red" } },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  const listStyle = { border: "1px solid black", padding: 0, margin: 0 };

  return (
    <div>
      <div style={listStyle}>
        {list.map((item) => (
          <div style={listStyle}>
            <h3
              style={
                item.visited
                  ? { backgroundColor: "blue", color: "white" }
                  : { backgroundColor: "white" }
              }
            >
              {item.area}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripList;
