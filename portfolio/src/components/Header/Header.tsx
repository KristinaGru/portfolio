import { useSelector } from 'react-redux';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Menu } from '@mui/icons-material';
import curl from '../../assets/icons/curl.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  const isDesktop = useMediaQuery('(min-width: 550px)');

  return (
    <div style={{ backgroundColor }}>
      <div className={style.header}>
        <Link to={'/'} className={style.main}>
          PORTFOLIO
        </Link>

        {isDesktop ? (
          <div className={style.menu}>
            <Link to={'/'}>home</Link>
            <Link to={'/projects'}>projects</Link>
            <Link to={'/contact'}>contact</Link>
          </div>
        ) : (
          <>
            <nav onClick={() => setMenuOpen(false)} className={style.nav}>
              <Drawer
                variant="temporary"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                ModalProps={{
                  keepMounted: true
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 300,
                    backgroundColor
                  }
                }}>
                <img src={curl} className={style.curl} />
                <Link to={'/'} className={style.link}>
                  home
                </Link>
                <Link to={'/projects'} className={style.link}>
                  projects
                </Link>
                <Link to={'/contact'} className={style.link}>
                  contact
                </Link>
              </Drawer>
            </nav>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ mr: 2, display: { sm: 'none' } }}>
              <Menu />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
}
