import { Icon } from '@iconify/react';
import wildFireIcon from '@iconify/icons-mdi/fire-alert';
import stormIcon from '@iconify/icons-mdi/flash-alert-outline';
import snowIcon from '@iconify/icons-mdi/weather-snowy-heavy';
import floodIcon from '@iconify/icons-mdi/waves';

const LocationMarker = ({ lat, lng, onClick, category }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      {category === 'wildfires' && <Icon icon={wildFireIcon} className='fire-icon' />}
      {category === 'severeStorms' && <Icon icon={stormIcon} className='storm-icon' />}
      {category === 'snow' && <Icon icon={snowIcon} className='snow-icon' />}
      {category === 'floods' && <Icon icon={floodIcon} className='flood-icon' />}
    </div>
  );
};

export default LocationMarker;
