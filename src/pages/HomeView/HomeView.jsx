import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';
import { loadUsercorp } from '../../services/apiService';
import Loading from '../../components/Loading';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaFolderTree } from 'react-icons/fa6';

const HomeView = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    loadUsercorp()
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

  const showThree = id => {
    navigate(`/tree/${id}`);
  };

  const showInfos = id => {
    navigate(`/info/${id}`);
  };

  return (
    <div className="container">
      {isLoading && <Loading />}

      {!isLoading && data && (
        <>
          {data?.user && (
            <div className={styles.homeHeader}>
              <h3>WELCOME TO THE SYSTEM</h3>
              <p>
                {data.user.first_name} {data.user.last_name}
              </p>
            </div>
          )}

          <div className={styles.table}>
            <h3>Sites</h3>
            <table>
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Name</th>
                  <th>Corporation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.sites?.map((site, index) => (
                  <tr key={site.id}>
                    <td>{index + 1}</td>
                    <td>{site.name}</td>
                    <td>
                      {data.corporation.find(corp => corp.id === site.corporation)?.name ||
                        'Unknown'}
                    </td>
                    <td className="d-flex gap-2">
                      <button onClick={() => showThree(site.id)} className={styles.iconButton}>
                        <FaFolderTree />
                      </button>

                      <button onClick={() => showInfos(site.id)} className={styles.iconButton}>
                        <FaEye />
                      </button>
                    </td>
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

export default HomeView;
