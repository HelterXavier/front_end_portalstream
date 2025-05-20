import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadImplantationTreeById } from '../../services/apiService';
import Loading from '../../components/Loading';

import { Accordion } from 'react-bootstrap';

const ImplantationTree = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    loadImplantationTreeById(id)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
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
          <h1 className="mb-4">{data.name}</h1>

          {data.tree && data.tree.length > 0 ? (
            <Accordion>
              {data.tree.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.id}>
                  <Accordion.Header>
                    {item.name} ({item.tag})
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-unstyled">
                      <li>
                        <strong>ID:</strong> {item.id}
                      </li>
                      <li>
                        <strong>Tag:</strong> {item.tag}
                      </li>
                      <li>
                        <strong>Tipo:</strong> {item.group}
                      </li>
                      <li>
                        <strong>Status:</strong> {item.status ? 'Ativo' : 'Inativo'}
                      </li>
                      <li>
                        <strong>Level:</strong> {item.level}
                      </li>
                      <li>
                        <strong>Ordem:</strong> {item.order}
                      </li>
                      <li>
                        <strong>Site:</strong> {item.site}
                      </li>
                      <li>
                        <strong>Crítico:</strong> {item.criticality ? 'Sim' : 'Não'}
                      </li>
                      <li>
                        <strong>Tipo de Ativo:</strong> {item.asset_type}
                      </li>
                      <li>
                        <strong>Localização Funcional:</strong> {item.functional_location}
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <p>Nenhum equipamento encontrado.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ImplantationTree;
