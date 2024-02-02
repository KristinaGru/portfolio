import { useSelector } from 'react-redux';
import style from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  return (
    <div style={{ backgroundColor }}>
      <div className={style.header}>
        <Link to={'/'} className={style.main}>
          PORTFOLIO
        </Link>
        <div className={style.menu}>
          <Link to={'/'}>home</Link>
          <Link to={'/projects'}>projects</Link>
          <Link to={'/contact'}>contact</Link>
        </div>
      </div>
    </div>
  );
}
