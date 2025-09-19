import Licat from "./component/Licat.jsx";
import Time from "./component/Time.jsx";

function Component() {
  return (
    <div>
      <Licat name="gary" age={35} />
      <Time />
    </div>
  );
}

export default Component;
