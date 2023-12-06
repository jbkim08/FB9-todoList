import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useAuthContext } from '../context/useAuthContext';

export default function Navbar() {
  const { dispatch, user } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        //로그아웃 성공시 유저 스테이트 업데이트
        dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <nav>
      <h1>My Todo List</h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">가입</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>🚀 {user.email}</li>
            <li onClick={logout}>로그아웃</li>
          </>
        )}
      </ul>
    </nav>
  );
}
