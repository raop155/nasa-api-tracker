import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return (
    <header className='header'>
      <Icon className='header-icon' icon={locationIcon} />
      <h1>Wildfire Tracker (Powered by NASA)</h1>
    </header>
  );
};

export default Header;
