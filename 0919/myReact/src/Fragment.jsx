import React from "react";
const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function MyComponent() {
  return (
    <React.Fragment className="my-fragment">
      {items.map((item) => (
        <dl>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </dl>
      ))}
    </React.Fragment>
  );
}

function Fragment() {
  return <MyComponent />;
}

export default Fragment;
