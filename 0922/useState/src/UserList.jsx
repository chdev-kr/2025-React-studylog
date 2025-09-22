import { useState } from "react";

export function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
}

function UserItem({ key, user }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li key={key}>
      <button onClick={() => setIsVisible(!isVisible)}>{user.name}</button>
      {isVisible ? (
        <div>
          <p>{user.email}</p>
          <p>{user.job}</p>
        </div>
      ) : null}
    </li>
  );
}
