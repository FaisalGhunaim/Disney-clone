import React from "react";
import "../index.css";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/assets/images/cta-logo-one.svg" alt="Random-logo" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney + Subscription. As of 03/26/21 , the price of Disney
            and The Disney Bundle will increase by 1$.
          </Description>
          <CTALogoTwo src="/assets/images/cta-logo-two.png" />
        </CTA>

        <BgImage />
      </Content>
    </Container>
  );
};

const CTALogoTwo = styled.img`
  max-width: 600px;
  min-width: 50px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const Description = styled.p`
  color: hsla(0, 0px, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #0063e5;
  padding: 40px;
  background-color: blue;
  &:hover {
    background-color: #0483ee;
  }
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

const CTALogoOne = styled.img`
  width: 100%;
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-image: url("/assets/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100px;
`;

export default Login;
