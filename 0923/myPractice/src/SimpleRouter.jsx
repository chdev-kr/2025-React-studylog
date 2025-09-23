// SimpleRouter에서
import AdminView from "./Components/AdminView";
import GuestView from "./Components/GuestView";
import UserView from "./Components/UserView";

function SimpleRouter({ userRole }) {
  if (userRole === "admin") {
    return <AdminView />;
  } else if (userRole === "user") {
    return <UserView />;
  } else if (userRole === "guest") {
    return <GuestView />;
  } else {
    return <div>권한을 확인하는 중...</div>;
  }
}

export default SimpleRouter;
