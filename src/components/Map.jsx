import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  // console.log('locationInfo', locationInfo);

  const markers = eventData.map((ev) => {
    const type = ev.categories[0].id;
    if (type === 'wildfires' || type === 'severeStorms' || type === 'snow' || type === 'floods') {
      return ev.geometry.map((point, index) => {
        return (
          <LocationMarker
            key={ev.id + index}
            lat={point.coordinates[1]}
            lng={point.coordinates[0]}
            onClick={() =>
              setLocationInfo({ id: ev.id, title: ev.title, category: ev.categories[0].title })
            }
            category={ev.categories[0].id}
          />
        );
      });
    }
    return null;
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
