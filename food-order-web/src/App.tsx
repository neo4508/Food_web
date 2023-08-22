import { useEffect } from 'react';
import { Login } from './pages/Login';
import './App.css';
import { UserInfor } from './pages/UsersInfo';

function App() {
  const accountList = localStorage.getItem('accountList');
  const isLogined = localStorage.getItem('isLogined');
  const userName = localStorage.getItem('userName');
  useEffect(() => {
    if (!accountList) {
      localStorage.setItem(
        'accountList',
        JSON.stringify([
          {
            userName: 'admin',
            password: 'admin',
          },
        ])
      );
    }
  }, []);
  return (
    <div className='App'>
      {isLogined ? <UserInfor name={userName ?? ''} /> : <Login />}
    </div>
  );
}

export default App;
