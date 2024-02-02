import style from './carousel.module.css';

export default function CarouselItem({
  img,
  alt,
  link
}: {
  img: string;
  alt: string;
  link: string;
}) {
  return (
    <a href={link} className={style.carouselCard} target="_blank">
      <img src={img} alt={alt} />
    </a>
  );
}
