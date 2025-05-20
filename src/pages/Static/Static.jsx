import React, { useEffect, useState } from 'react';
import { loadStatic } from '../../services/apiService';
import Loading from '../../components/Loading';
import styles from './Static.module.css';

const Static = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    loadStatic()
      .then(res => {
        const data = res?.data;
        setData(data);
      })

      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      {isLoading && <Loading />}

      {!isLoading && data && (
        <>
          <h3>Asset Group</h3>

          <div className={styles.table}>
            <h3>Sites</h3>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Nº</th>
                  <th style={{ width: '40%' }}>ID</th>
                  <th style={{ width: '33%' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {data?.asset_group?.map((site, index) => (
                  <tr key={site.id}>
                    <td>{index + 1}</td>
                    <td>{site.id}</td>
                    <td>{site.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Static;
