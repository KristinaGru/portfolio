import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
