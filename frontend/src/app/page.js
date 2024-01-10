'use client';

import Login from '@/app/Login/page';
import Registration from '@/app/Registration/page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
