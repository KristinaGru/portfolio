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
        <Link to={'/'}>
          <div className={style.content}>PORTFOLIO</div>
        </Link>
      </div>
    </div>
  );
}
