import { useDispatch, useSelector } from 'react-redux';
import style from './frontPage.module.css';
import { useEffect } from 'react';
import { setBackground } from '../../store';
import frame from '../../assets/icons/frame.svg';
import placeholder from '../../assets/images/transparent-cartoon-cat-cartoon-cat-with-headphones-uses-laptop-computer655f8cee19e661.5869343117007608141061.png';
import Carousel from '../../components/Carousel/Carousel';

export default function FrontPage() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBackground('FrontPage'));
  }, []);

  return (
    <div style={{ backgroundColor }} className={style.main}>
      <div className={style.info}>
        <div>Kristina Grudyte</div>
        <div className={style.dev}>Web Developer</div>
        <Carousel />
      </div>
      <div className={style.image}>
        <img src={frame} className={style.frame} />
        <img src={placeholder} className={style.photo} />
      </div>
    </div>
  );
}
