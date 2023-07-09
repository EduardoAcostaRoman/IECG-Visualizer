'use client';

import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import { useState } from 'react';

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return <div>{userLoggedIn ? <LoginPage /> : <MainPage />}</div>;
}
