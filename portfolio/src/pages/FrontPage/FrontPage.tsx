import { useDispatch, useSelector } from 'react-redux';
import style from './frontPage.module.css';
import { useEffect } from 'react';
import { setBackground } from '../../store';

export default function FrontPage() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBackground('FrontPage'));
  }, []);
  console.log(backgroundColor);
  return (
    <div style={{ backgroundColor }} className={style.main}>
      FrontPage
    </div>
  );
}
