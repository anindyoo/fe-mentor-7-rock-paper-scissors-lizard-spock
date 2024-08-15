import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Rules from '../components/Rules/Rules';

const Main = () => (
  <>
    <Header />
    <Outlet />
    <Rules />
  </>
);

export default Main;
