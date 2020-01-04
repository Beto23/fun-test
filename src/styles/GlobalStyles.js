import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #eaeaea;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #ababab;
    padding: 50px 30px;
    margin-top: 80px;
    .form-input {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      label {
        margin-bottom: 10px;
      }
      input {
        width: 300px;
        height: 30px;
      }
    }
  }


  .container-result {
    min-height: 100vh;
    position: relative;
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    p {
      font-size: 10px;
      text-align: center;
      margin-bottom: 40px;
    }
    .button {
      background: white;
      padding: 10px 30px;
      text-align: center;
      cursor: pointer;
    }
  }

  .button-copy {
    background: white;
    padding: 10px 20px;
    text-align: center;
    width: 120px;
    margin: 0 auto;
    margin-bottom: 20px;
    cursor: pointer;
  }
`
