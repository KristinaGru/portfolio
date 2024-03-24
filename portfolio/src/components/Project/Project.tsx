import { Project } from '../../types/Project';
import style from './project.module.css';
import dottedLine from '../../assets/icons/dotted_line.svg';
import arrow from '../../assets/icons/arrow.svg';
import stars from '../../assets/icons/starts.svg';
import spring from '../../assets/icons/spring.svg';
import {
  ArrowDownward,
  ArrowUpward,
  GitHub,
  Language
} from '@mui/icons-material';
import { IconButton, useMediaQuery } from '@mui/material';

export default function ProjectDisplay({ project }: { project: Project }) {
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const projectWrapper = project.first
    ? `${style.projectWrapper} ${style.firstProject}`
    : style.projectWrapper;
  const scroll = (direction: number) => {
    window.scrollBy({ top: direction, behavior: 'smooth' });
  };
  const projectElements = (
    <>
      <div className={style.about}>{project.about}</div>
      <div className={style.tools}>
        <img src={stars} />
        {project.tools.map((tool) => (
          <span>{tool}</span>
        ))}
        <img src={spring} />
      </div>
    </>
  );
  return (
    <div className={projectWrapper}>
      <div className={style.anotherWrapper}>
        {isDesktop ? (
          <div className={style.titleBox}>
            <img src={dottedLine} />
            {project.title}
            <img src={arrow} />
          </div>
        ) : null}
        <div className={style.imgWrapper}>
          <img className={style.img} src={project.gif} />
          <div className={style.overlay}>
            <IconButton href={project.github} target="_blank">
              <GitHub
                fontSize="large"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  color: '#000'
                }}
              />
            </IconButton>
            <IconButton href={project.link} target="_blank">
              <Language
                fontSize="large"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  color: '#000'
                }}
              />
            </IconButton>
          </div>
        </div>
        {isDesktop ? projectElements : <div>{projectElements}</div>}
      </div>
      <div className={style.buttons}>
        {!project.first ? (
          <button className={style.button} onClick={() => scroll(-innerHeight)}>
            <ArrowUpward style={{ marginBottom: '3rem' }} />
            <div className={style.prev}>previous</div>
          </button>
        ) : null}
        {!project.last ? (
          <button className={style.button} onClick={() => scroll(innerHeight)}>
            <div className={style.next}>next</div>
            <ArrowDownward style={{ marginTop: '3rem' }} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
