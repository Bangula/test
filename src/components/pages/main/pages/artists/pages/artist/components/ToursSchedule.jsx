import React from 'react';
import { getToursSchedule } from '@endpoints/artists';

const ToursSchedule = ({ artist }) => {
  const [data, setData] = React.useState([]);
  const doGetData = async () => {
    const { error, data } = await getToursSchedule(artist);
    if (!error) {
      setData(data.data.data);
    }
  };
  React.useEffect(() => {
    doGetData();
  }, [artist]);
  return <div />;
};

export default ToursSchedule;
