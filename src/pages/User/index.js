import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useForm, Controller } from "react-hook-form";
import { Row, Col } from 'react-bootstrap';
import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

export default function User() {
  const [user, setUsers] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    errors,
    formState,
  } = useForm();

  const onSubmit = async (data) => {
    handleEditUser(data);
    console.log('d', data)
  };

  const getUser = async () => {
    await api.get(`user/${id}`).then((response) => {
      let userInfo = response.data;

      const roles = userInfo.roles.map((role) => role.id);

      const user = {
        ...userInfo,
        roles: roles[0],
      };

      const fields = ["nome", "assentamento", "setor", "escola", "email", "telefone", "provider", "roles"];
      fields.forEach((field) => setValue(field, user[field]));
      setUsers(user);
    });
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEditUser(data) {
    await api
      .put(`/user/${id}`, data)
      .then(async (response) => {
        if (response.data.success) {
          alert(response.data.success);
          history.push("/users");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("Aviso", error.response.data.message);
        }
      });
  }

  return (
    <>
      <Header />
      <div className="Conta">
      <p>* Se o setor estiver diferente das informações do selecione, o usuário Não tem Permissão para o Plantio das árvores.</p>

      <Row>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Nome</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <input
                placeholder="Nome"
                onBlur={onBlur}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
            name="nome"
            rules={{ required: true }}
            defaultValue=""
          />
        </div>
        </Col>
        <Col md={6}>
        <div className="Div">
          <span className="Div">* Setor</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <select
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                className="Selectd"
                name="setor"
              >
                <option value="">Selecione o setor</option>
                <option value="Cultura">Cultura</option>
                <option value="Frente de Massa">Frente de Massa</option>
                <option value="Frente de Massas">Frente de Massas</option>
                <option value="FM">FM</option>
                <option value="Formação">Formação</option>
                <option value="Educação">Educação</option>
                <option value="Produção">Produção</option>
                <option value="Comunicação">Comunicação</option>
                <option value="Gênero">Gênero</option>
                <option value="LGBT ou Coletivo LGBT">LGBT ou Coletivo LGBT</option>
                <option value="Saúde">Saúde</option>
                <option value="Direitos Humanos ou DH">Direitos Humanos ou DH</option>
                <option value="Finanças">Finanças</option>
                <option value="Juventude">Juventude</option>
                <option value="Secretaria">Secretaria</option>
                <option value="Relações Internacionais ou CRI">Relações Internacionais ou CRI</option>
                <option value="JCC">JCC</option>
                <option value="Projetos">Projetos</option>
                <option value="Escola">Escola</option>
                <option value="Centro de Formação ou Centro">Centro de Formação ou Centro</option>
              </select>
            )}
            name="setor"
            defaultValue=""
          />
        </div>
        </Col>
      </Row>
        
      <Row>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Assentamento</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <input
                placeholder="Assentamento"
                onBlur={onBlur}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
            name="assentamento"
            defaultValue=""
          />
        </div>
        </Col>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Escola</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <input
                placeholder="Escola"
                onBlur={onBlur}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
            name="escola"
            defaultValue=""
          />
        </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Email</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <input
                placeholder="Email"
                onBlur={onBlur}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
        </div>
        </Col>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Telefone</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <input
                placeholder="Telefone"
                onBlur={onBlur}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
            name="telefone"
            rules={{ required: true }}
            defaultValue=""
          />
        </div>
        </Col>
      </Row>
        
      <Row>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Tipo</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <select
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                className="Selectd"
                name="roles"
              >
                <option value="3">Usuário</option>
                <option value="1">Adminstrador</option>
                <option value="2">Aprovador</option>
              </select>
            )}
            name="roles"
            defaultValue=""
          />
        </div>
        </Col>
        <Col md={6}>
        <div className="Div">
          <span className="Div">Plantio</span>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <select
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                className="Selectd"
                name="provider"
              >
                <option value="0">Não permitido</option>
                <option value="1">Permitido</option>
              </select>
            )}
            name="provider"
            rules={{ required: true }}
            defaultValue=""
          />
        </div>
        </Col>
      </Row>
        

       

        
        
        
        <button
          className="buttonUp"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Atualizar
        </button>
      </div>
    </>
  );
}
