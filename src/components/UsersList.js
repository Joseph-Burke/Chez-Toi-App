import fetchUsers from "../helpers/fetchUsers";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <ul>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;