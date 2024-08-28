import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux-toolkit/userSlice';

export const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <input
      value={email}
      type="email"
      placeholder="Email"
      onChange={handleChange}
    />
  );
};
