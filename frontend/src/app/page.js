'use client';

import MainPage from '@/pages/MainPage';
import Login from '@/pages/Login';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div>
      <div>{userLoggedIn ? <MainPage /> : <Login />}</div>
    </div>
  );
}
