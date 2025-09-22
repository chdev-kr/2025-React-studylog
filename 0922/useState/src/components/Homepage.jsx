function Homepage({ setIsLogin }) {
  return (
    <main>
      <h1>Homepage</h1>
      <button onClick={() => setIsLogin(false)}>로그아웃</button>
    </main>
  );
}

export default Homepage;
