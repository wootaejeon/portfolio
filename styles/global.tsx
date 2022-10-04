import css from "styled-jsx/css";

export default css.global`
  body {
    color: #ffffff;
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
    width: 100vw;

    background-color: #10101a;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  // Fonts
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
  }

  h2 {
    font-size: 35px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
  }

  h3 {
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }

  h4 {
    line-height: 1.6;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  small {
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  h5 {
    // alert
    line-height: 1.4;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
