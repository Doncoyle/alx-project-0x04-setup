import { useUser } from '../context/UserContext';

const UserProfile = () => {
  const { user, setUser } = useUser();

  const updateUser = () => {
    setUser({ name: 'John Doe', email: 'john@example.com' });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default UserProfile;