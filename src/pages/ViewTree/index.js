import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Position from '../../components/Position';
import { Card, Row, Col, Container } from "react-bootstrap";
import NoPicture from '../../assets/no-picture.png';
import "./style.css";

export default function ViewTree() {
  const [tree, setTree] = useState([]);

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [file, setFile] = useState([]);

  const { id } = useParams();

  const getTree = async () => {
    await api.get(`tree/${id}`).then((response) => {
      setTree(response.data);
      setLatitude(response.data.latitude);
      setLongitude(response.data.longitude);
      setFile(response.data.files)
    });
  };

  useEffect(() => {
    getTree();
  }, []);
 
  return (
    <>
      <Header />
      <div className="ContainerV">
        <div className="ContentV">
        <Container>
          <Row>
              <Col>
                  {file.length > 0 ? (
                    <Card.Img style={{ width: 399, height: 300 }} variant="top" src={file[0].url} />
                  ) : (
                    <Card.Img style={{ width: 399, height: 300 }} variant="top" src={NoPicture} />
                  )}
                  <Card key={tree.id} style={{ width: '25rem' }}>
                  <Card.Body>
                    <Card.Text>
                     <strong>Espécie:</strong><br/><br/> {tree.especie}
                    </Card.Text>
                    <Card.Text>
                     <strong>Descricao:</strong><br/><br/> {tree.descricao}
                    </Card.Text>
                    <Card.Text>
                      <strong>Data:</strong><br/><br/> {tree.data}
                    </Card.Text>
                    <Card.Text>
                      <strong>Endereço:</strong><br/><br/> {tree.localizacao}
                    </Card.Text>
                    <Card.Text>
                      <strong>Quantidade:</strong><br/><br/> {tree.quantidade}
                    </Card.Text>
                  </Card.Body>
                </Card>
              {(latitude  && longitude ) && <Position lat={latitude} long={longitude}  />}

              </Col>
             
          </Row>
        </Container>
        </div>
      </div>
    </>
  );
}
