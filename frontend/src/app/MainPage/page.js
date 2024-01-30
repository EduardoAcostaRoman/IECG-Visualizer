'use client';

import Image from 'next/image';
import { useEffect, useContext } from 'react';
import UserContext from '@/components/store/user-context';

function MainPage(props) {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    console.log(userCtx.user);
  }, []);

  return (
    <div className='center-align'>
      <h3>Bienvenido {userCtx.user.name}!</h3>
      <Image
        src="/images/timmy's dad.png"
        width={200}
        height={300}
        alt='image'
        priority={true}
      ></Image>
    </div>
  );
}

export default MainPage;
