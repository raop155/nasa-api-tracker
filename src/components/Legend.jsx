import { Icon } from '@iconify/react';
import wildFireIcon from '@iconify/icons-mdi/fire-alert';
import stormIcon from '@iconify/icons-mdi/flash-alert-outline';
import snowIcon from '@iconify/icons-mdi/weather-snowy-heavy';
import floodIcon from '@iconify/icons-mdi/waves';

const Legend = () => {
  return (
    <div className='legend'>
      <h3>LEGEND:</h3>
      <ul>
        <li>
          <Icon icon={wildFireIcon} className='fire-icon' />
          Wildfires
        </li>
        <li>
          <Icon icon={stormIcon} className='storm-icon' />
          Severe Storms
        </li>
        <li>
          <Icon icon={snowIcon} className='snow-icon' />
          Snow
        </li>
        <li>
          <Icon icon={floodIcon} className='flood-icon' />
          Floods
        </li>
      </ul>
    </div>
  );
};

export default Legend;
