import { Project } from '../../types/Project';
import style from './project.module.css';
import dottedLine from '../../assets/icons/dotted_line.svg';
import arrow from '../../assets/icons/arrow.svg';
import stars from '../../assets/icons/starts.svg';
import spring from '../../assets/icons/spring.svg';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function ProjectDisplay({ project }: { project: Project }) {
  const projectWrapper = project.first
    ? `${style.projectWrapper} ${style.firstProject}`
    : style.projectWrapper;
  const scroll = (direction: number) => {
    window.scrollBy({ top: direction, behavior: 'smooth' });
  };
  return (
    <div className={projectWrapper}>
      <div className={style.anotherWrapper}>
        <div className={style.titleBox}>
          <img src={dottedLine} />
          {project.title}
          <img src={arrow} />
        </div>
        <a href={project.link} target="_blank" className={style.imgWrapper}>
          <img className={style.img} src={project.gif} />
        </a>
        <div className={style.about}>{project.about}</div>
        <div className={style.tools}>
          <img src={stars} />
          {project.tools.map((tool) => (
            <span>{tool}</span>
          ))}
          <img src={spring} />
        </div>
      </div>
      <div className={style.buttons}>
        {!project.first ? (
          <button className={style.button} onClick={() => scroll(-innerHeight)}>
            <ArrowUpward style={{ marginBottom: '3rem' }} />
            <div className={style.prev}>previous</div>
          </button>
        ) : null}
        <button className={style.button} onClick={() => scroll(innerHeight)}>
          <div className={style.next}>next</div>
          <ArrowDownward style={{ marginTop: '3rem' }} />
        </button>
      </div>
    </div>
  );
}
