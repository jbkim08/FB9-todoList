import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';

export default function Navbar() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('유저 로그아웃');
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
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">가입</Link>
        </li>
        <li onClick={logout}>로그아웃</li>
      </ul>
    </nav>
  );
}
