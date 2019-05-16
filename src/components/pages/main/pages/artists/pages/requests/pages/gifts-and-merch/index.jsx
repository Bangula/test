import React from 'react';
import Gifts from './Gifts';
import Merchandise from './Merchandise';
import { getGiftsRequests, getMerchRequests } from '@endpoints/artists';

const GiftsAndMerchandise = ({ artist }) => {
  const [data, setData] = React.useState({});
  const doGetData = async () => {
    try {
      const response = await Promise.all([
        getGiftsRequests(artist),
        getMerchRequests(artist),
      ]);
      setData({
        gifts: response[0].data.data.data,
        merch: response[1].data.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    doGetData();
  }, []);
  return (
    <>
      <div className="mb-12">
        <Gifts data={data.gifts} />
      </div>
      <div>
        <Merchandise data={data.merch} />
      </div>
    </>
  );
};

export default GiftsAndMerchandise;
