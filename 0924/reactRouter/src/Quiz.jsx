import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> HomePage </Link>
      <hr />
      <Link to="/product"> Product Detail </Link>
      <br />
      <Link to="/product/1"> Product Detail-1 </Link>
      <br />
      <Link to="/product/2"> Product Detail-2 </Link>
      <br />
      <hr />
      <Link to="/product/1/notice">Notice-1</Link>
      <br />
      <Link to="/product/2/notice">Notice-2</Link>
      <br />
      <hr />
      <Link to="/cart">Cart</Link>
      <hr />
      <Link to="/users">Users Page</Link>
      <br />
      <Link to="/users/coupon">Users Page - 중첩 라우터 coupon</Link>
      <br />
      <Link to="/users/question">Users Page - 중첩 라우터 question</Link>
      <br />
      <Link to="/users/notice">Users Page - 중첩 라우터 notice</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/product/:id/notice"
          element={<ProductDetailNoticePage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<UserPageCont />}>
          <Route index element={<UserIndex />} />
          <Route path="coupon" element={<UserCoupon />} />
          <Route path="question" element={<UserQuestion />} />
          <Route path="notice" element={<UserNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <h1>홈페이지 Homepage</h1>
      <h2>홈페이지 경로: /</h2>
    </>
  );
}

function ProductDetail() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>프로덕트 디테일 Product Detail</h1>
      <h2>경로: {location.pathname} </h2>
    </>
  );
}

function ProductDetailNoticePage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>프로덕트 디테일 Notice Page</h1>
      <h2>경로: {location.pathname} </h2>
    </>
  );
}

function Cart() {
  return <h2>Cart 페이지</h2>;
}
function UserPageCont() {
  return (
    <>
      <h1>전체적인 UserPage</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function UserIndex() {
  return <h2>User Page의 index 페이지</h2>;
}

function UserCoupon() {
  return <h2>UserCoupon 페이지</h2>;
}

function UserQuestion() {
  return <h2>User Question 페이지</h2>;
}

function UserNotice() {
  return <h2>User Notice 페이지</h2>;
}

export default App;
