import CarouselItem from './CarouselItem';
import style from './carousel.module.css';

export default function Carousel() {
  const icons = [
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      alt: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      alt: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      alt: 'Javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      alt: 'Typescript',
      link: 'https://www.typescriptlang.org/'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
      alt: 'React.jstesting',
      link: 'https://react.dev/'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      alt: 'Node.js',
      link: 'https://nodejs.org/en/about'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      alt: 'express',
      link: 'https://expressjs.com/'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
      alt: 'postgreSQL',
      link: 'https://www.postgresql.org/'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      alt: 'mySQL',
      link: 'https://www.mysql.com/'
    },
    {
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      alt: 'docker',
      link: 'https://www.docker.com/'
    },
    {
      img: 'https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
      alt: 'git',
      link: 'https://git-scm.com/'
    },
    {
      img: 'https://camo.githubusercontent.com/3e5344a2965e786497ceb575ad67d2c64d412bb9683da05791edf424a0e40734/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667',
      alt: 'firebase',
      link: 'https://firebase.google.com/'
    },
    {
      img: 'https://camo.githubusercontent.com/a13ca5b988ada41839ebe4f88455e63419a1b56fcb5eda207794cd1649a61d2c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667',
      alt: 'postman',
      link: 'https://www.postman.com/'
    }
  ];
  const doubledIcons = [...icons, ...icons];
  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselTrack}>
        {doubledIcons.map((icon, index) => (
          <CarouselItem
            key={index}
            img={icon.img}
            alt={icon.alt}
            link={icon.link}></CarouselItem>
        ))}
      </div>
    </div>
  );
}
