import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-bottom: 10px;
}

form select {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 18px;
}

.button {
  width: 100%;
  height: 60px;
  background: #45AD9A;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.5 s;
}

.button:hover {
  filter: brightness(90%);
}


.back-link {
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.2s;
}

.back-link svg {
  margin-right: 8px;
}

.back-link:hover {
  opacity: 0.8;
}

form textarea {
  width: 100%;
  min-height: 140px;
  color: #333;
  resize: vertical;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px 24px;
  line-height: 24px;
}


.Container {
  width: 100%;
  max-width: 1120px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}


.Content {
  width: 100%;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Conta {
  width: 100%;
  padding: 60px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  justify-content: center;
  margin: auto 0;
  text-align: center;

  align-items: center;
}

`;