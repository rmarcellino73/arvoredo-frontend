import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import loginImg from '../../assets/login.jpg';
import './style.css'; 

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return(
    <Navbar className="background" expand="lg">
         <Container>
         <Navbar.Brand href="#">
         <img src={loginImg} alt="Arvoredo" title="Arvoredo" width={100}/>
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/users">Usuários</Nav.Link>
            </Nav>
            <span variant="link">Olá {profile.nome}</span>
            <button className="btnSignOut" type="button" onClick={handleSignOut}>Sair</button>
          </Navbar.Collapse>
         </Container>
        </Navbar>
  );
}
