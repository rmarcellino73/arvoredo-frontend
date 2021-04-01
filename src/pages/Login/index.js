import React from 'react';
import { Form, Input } from '@rocketseat/unform'
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import './style.css';

import loginImg from '../../assets/login.jpg';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  
  return(
    <div className="login-container">
      <section className="form">
      <img src={loginImg} alt="Togo Delivery" title="Togo Delivery"/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input
            name="email"
            type="email"
            placeholder="Seu E-mail"
          />
          <Input
            name="password"
            type= "password"
            placeholder="Sua senha"
          />
          {/* <i className="icone-eye">
            <FiEye size={16} color="#EE2724" />
          </i> */}

          <button className="button" type="submit">{loading ? 'Caregando...' : 'Acessar'}</button>
 
          {/* <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link> */}
        </Form>
      </section>

    </div>
  );
}
