import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadImplantationInfoById } from '../../services/apiService';

const HomeInfo = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    loadImplantationInfoById(id)
      .then(res => {
        setData(res.data);
        console.log(res.data.asset_info.devices);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return <div className="container">ID: {id}</div>;
};

export default HomeInfo;
