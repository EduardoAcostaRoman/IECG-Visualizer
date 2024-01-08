import Image from 'next/image';
import logo from '../../../public/images/154117.png';

function Header() {
  return (
    <header className='page-header   light-blue darken-3 '>
      <div className='container'>
        <div className='row '>
          <div className='col s2'>
            <Image src={logo} width={100} height={70} alt='logo' />
          </div>
          <div className='col s3'>
            <h5 className='white-text'>IECG Visualizer</h5>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
