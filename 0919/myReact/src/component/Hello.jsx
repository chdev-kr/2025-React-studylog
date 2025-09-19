import Resume from "../Resume";

function Hello() {
  return (
    <div>
      {/* <Hello name="개리" /> */}
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}

export default Hello;
