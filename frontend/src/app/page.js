'use client';

import Login from '@/app/Login/page';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainPage from './MainPage/page';

export default function Home() {
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div>
      {/* <div>{userLoggedIn ? <MainPage /> :<Login />}</div> */}
      <Login />
    </div>
  );
}
