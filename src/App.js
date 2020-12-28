import { useEffect, useState } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []);

  useEffect(() => {
    console.log('ESPERA EL ASYNC?');
  }, []);

  return <div>{!loading ? <Map evenData={eventData} /> : <Loader />}</div>;
}

export default App;
