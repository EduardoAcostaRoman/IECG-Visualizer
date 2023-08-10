'use client';

import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return <div>{userLoggedIn ? <MainPage /> : <LoginPage />}</div>;
}
