import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`

    background-color: #1d1d1d;
    padding-top: 2rem;
    padding-bottom: 4rem;
    
    h5 {
        color: #fff;
    }
    
    p {
        color: #fff;
    }
    
    a,a:hover{
        color: #fff;

    }
    
`;

const Footer = () => {

  return (
    <FooterStyled >
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 >myApp</h5>
            <p>
              This is placeholder text. Your web app description goes here.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a href="/">
                  Example Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
export default Footer;