import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';
import { getGeolocation } from './utils/Geolocation';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    getGeolocation().then((res) => {
      setCenter(res);
    });
  }, [setCenter]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, [setEventData, setLoading]);

  return (
    <div>
      <Header />
      {!loading && center ? <Map eventData={eventData} center={center} /> : <Loader />}
    </div>
  );
}

export default App;
