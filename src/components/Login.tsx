import React, {useEffect, useLayoutEffect, useState} from "react";
import styled from "styled-components";
import {Device} from "../util/Device";
import {useDispatch, useSelector} from "react-redux";
import {login, validateToken} from '../modules/auth';
import {RootReducerType} from "../modules";
import {useHistory} from "react-router";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e9ecef;
`

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  background: white;
  
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.04);
  
  padding: 1rem;
  
  @media ${Device.mobile} { 
    width: 80vw;
    height: 360px;
  }
  @media ${Device.tablet} { 
    width: 50vw;
    height: 400px;
  }
  @media ${Device.web} { 
    width: 500px;
    height: 400px;
  }
`

const HeaderDiv = styled.div`
  font-weight: 400;
  
  margin: 1rem;
  display: flex;
  justify-content: center;
  
  color: #25BB41;
  
  @media ${Device.mobile} { 
    font-size: 2rem;
  }
  @media ${Device.tablet} { 
    font-size: 3rem;
  }
  @media ${Device.web} { 
    font-size: 3rem;
  }
`

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const InputWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  flex-direction: column;
  width: 100%;
`;

const InputLabel = styled.div`
  display: flex;
  font-size: 1rem;
  color: #283140;
  margin: 10px 0;
`

const Input = styled.input`
  width: 100%;
  color: #283140;
  font-size: 1rem;
  border: solid 1px #63A088;
  border-radius: 16px;
  padding: 5px 10px;
  ::placeholder {
    color: #c6c6c6;
    font-size: 1rem;
  }
`;

const LoginButton = styled.button`
  position: relative;
  margin-top: 2rem;
  height: 3rem;
  color: white;
  background-color: #63A088;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 16px;
  width: 60%;
`;

const ErrorMessage = styled.div`
  font-size: 1rem;
  height: 1rem;
  color: red;
  margin-top: 10px;
  text-align: center;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {authenticated, error} = useSelector((state: RootReducerType) => state.auth);
    const history = useHistory();

    useLayoutEffect(() => {
        let token = localStorage.getItem("ACCESS_TOKEN")
        if (token) dispatch(validateToken())
    }, [dispatch])

    useEffect(() => {
        if (authenticated) history.push("/")
    }, [authenticated, history])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(login({username, password}))
    }

    return (
        <MainContainer>
            <BodyContainer>
                <HeaderDiv>LOGIN</HeaderDiv>
                <Form onSubmit={handleLogin}>
                    <InputWrapper>
                        <InputLabel>username</InputLabel>
                        <Input placeholder={"bobby@hku.hk"} type={"text"} value={username}
                               onChange={handleEmailChange}/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel>password</InputLabel>
                        <Input placeholder={"*******"} type={"password"} value={password}
                               onChange={handlePasswordChange}/>
                    </InputWrapper>
                    <ErrorMessage> {error ? "Login information is invalid!" : ""}</ErrorMessage>
                    <LoginButton type={"submit"}>LOGIN</LoginButton>
                </Form>
            </BodyContainer>
        </MainContainer>
    );
}

export default Login;
