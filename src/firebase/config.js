import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBClqO5fBWOpca9bnTebzgvzeRTuEMr0z4',
  authDomain: 'todolist-drv98.firebaseapp.com',
  projectId: 'todolist-drv98',
  storageBucket: 'todolist-drv98.appspot.com',
  messagingSenderId: '496208153776',
  appId: '1:496208153776:web:2ab44b390e59c18f0dff75',
};

// 파이어베이스 초기설정
const app = initializeApp(firebaseConfig);

// DB 초기화
const db = getFirestore();
// 인증 초기화
const auth = getAuth();

export { db, auth };
