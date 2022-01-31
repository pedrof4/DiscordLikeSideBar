import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaBeer } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="...">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaBeer size="22" />} />
    </div>
    
  );
};

const SideBarIcon = ({ icon, text = 'Interactive🎩' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);



export default SideBar;