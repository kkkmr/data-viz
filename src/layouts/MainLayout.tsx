// import { Outlet } from 'react-router-dom';
import SideNav from '../features/SideNav';
import TopTabs from '../features/TopTabs';
import './MainLayout.css';

const MainLayout = () => (
  <div className="layout-grid">
    <SideNav/>
    <div className="main-content">
      <TopTabs />
    </div>
  </div>
);

export default MainLayout;