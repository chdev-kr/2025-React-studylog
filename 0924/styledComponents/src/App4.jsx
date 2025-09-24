import styled from "styled-components";

const ProductTitle = styled.h2`
  color: red;
`;

const ProductSubTitle = styled.h3`
  color: blue;
`;

const ProductDescription = styled.p`
  font-weight: bold;
`;

const ProductPrice = styled.div`
  border: 1px solid red;
`;
const ProductImage = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

function App(props) {
  return (
    <>
      <ProductImage
        src={"https://picsum.photos/id/237/200/300"}
        alt={"검은강아지"}
      />
      <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
      <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        distinctio sed molestias saepe reiciendis fugit illum enim et inventore,
        aliquam esse non nam consectetur minima atque consequuntur voluptates,
        eum quia.
      </ProductDescription>
      <p>사료, 집 일괄 판매합니다.</p>
      <ProductPrice />
      <p>$1,000.00</p>
    </>
  );
}

export default App;
