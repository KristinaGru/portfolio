import { useDispatch, useSelector } from 'react-redux';
import style from './frontPage.module.css';
import { useEffect } from 'react';
import { setBackground } from '../../store';
import frame from '../../assets/icons/frame.svg';
import image from '../../assets/images/DSC04969213.png';
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
        <img src={image} className={style.photo} />
      </div>
    </div>
  );
}
