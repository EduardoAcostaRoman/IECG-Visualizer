import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <img className={classes.logo} src='/images/iecg.jpg' alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <a href='#'>option 1</a>
          </li>
          <li>
            <a href='#'>option 2</a>
          </li>
          <li>
            <a href='#'>option 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
