import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import Input from './Input';

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt="logo" />
        <h3>
          Alex <span>Genc</span>
        </h3>
      </LogoWrapper>
      
      <Form>
        <h3>Sign Up!</h3>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button>Sign Up!</button>
      </Form>

      <div>
        <Terms>
          By signing up, I agree to the <span>Privacy Policy</span> <br /> and <span>Terms of Service</span>.
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  )
}

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 15px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }

`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    background-color: #70edb9;
    color: #fff;
    font-weight: 600px;
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;

    transition: all 0.2s ease-in;
  
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 12px;
  color: #808080;
  font-weight: 300;

  span {
    color: #ff8d8d;
    cursor: pointer;
  }
`;

export default Sidebar;
