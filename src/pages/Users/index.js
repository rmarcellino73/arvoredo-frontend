import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { FiTrash2, FiEdit, FiEye } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Table } from "react-bootstrap";

import "./style.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  async function handDeleteUser(id) {
    try {
      await api.delete(`users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("Usuário deletado com sucesso.");
    } catch {
      toast.error("Erro ao deletar usuário.");
    }
  }

  return (
    <>
      <Header />
      <div className="Container">
        <div className="Content">
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Setor</th>
                <th>Ações</th>
              </tr>
            </thead>

            {users.map((user, i) => (
              <tbody>
                <tr>
                  <td>{user.nome}</td>

                  {user.roles.length > 0 ? (
                    user.roles.map((role) => {
                      return <td>{role.name}</td>;
                    })
                  ) : (
                    <td>Usuario</td>
                  )}

                  <td>{user.setor === null ? "Sem Setor" : user.setor}</td>

                  <td>
                    <Link className="btnTrash">
                      <FiTrash2
                        onClick={() => handDeleteUser(user.id)}
                        size={20}
                        color="#fff"
                      />
                    </Link>
                    <Link to={`/edit/${user.id}`} className="btnEdit">
                      <FiEdit size={20} color="#fff" />
                    </Link>
                    <Link to={`/trees/${user.id}`} className="btnView">
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
