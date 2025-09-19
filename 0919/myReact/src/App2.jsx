function HelloProps(props) {
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

function App2() {
  return (
    <HelloProps
      name="jaehyun"
      age={25}
      someFunc={() => "awesome!!!"}
      someJSX={<img src="https://picsum.photos/id/237/200/300" />}
      someArr={[1, 2, 3]}
      someObj={{ one: 1 }}
    />
  );
}

function ColorText(props) {
  return <h3 style={{ color: props.color }}>색이 바뀌어요!!</h3>;
}

function App() {
  return (
    <>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </>
  );
}

export default App;
