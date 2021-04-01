import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { FiEye } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";

import api from "../../services/api";

import { Table } from "react-bootstrap";

import "./style.css";

export default function Tree() {
  const [trees, setTrees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`user/${id}`).then((response) => {
      setTrees(response.data.trees);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="ContainerT">
        <div className="ContentT">
        <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Espécie</th>
                <th>Quantidade</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>

            {trees.map((tree, i) => (
              <tbody>
                <tr>
                  <td>{tree.especie}</td>
                  <td>{tree.quantidade}</td>
                  <td>{tree.data}</td>
                  <td>
                    <Link to={`/view/${tree.id}`} className="btnEdit">
                      <FiEye size={20} color="#fff" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}
