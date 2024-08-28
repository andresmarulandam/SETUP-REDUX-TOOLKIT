import { useSelector } from 'react-redux';

export const Header = () => {
  // El user de state.user viene del name que le dimos dentro del userSlice
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h1>Redux Toolkit Example Setup</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};
