import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addUser } from './redux-toolkit/userSlice';
import { Email } from './components/Email';
import { Header } from './components/Header';

import './App.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/1',
        );
        const data = await response.json();
        dispatch(addUser(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Email />
    </>
  );
}

export default App;
