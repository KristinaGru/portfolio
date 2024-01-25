import { useDispatch, useSelector } from 'react-redux';
import style from './projectpage.module.css';
import { useEffect } from 'react';
import { setBackground } from '../../store';

export default function ProjectPage() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBackground('Projects'));
  }, []);
  return (
    <div style={{ backgroundColor }} className={style.main}>
      ProjectPage
    </div>
  );
}
