import React, {FunctionComponent} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {logout} from "../../modules/auth";
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

const MainContainer = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;

  background-color: #fff;
  box-shadow: 0 1px 1px #c6c6c6;
`

const InfoContainer = styled.div`
  max-width: 960px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-size: 3rem;
  color: #25BB41;
  padding: 10px 0;
`

const UserInfo = styled.div`
  color: #25BB41;
  display: flex;
  align-items: center;
`

const NoStyleLink = styled(Link)`
  text-decoration: none;
`

const LogoutButton = styled.button`
  color: #25BB41;
  border: none;
  background-color: #fff;
  padding: 0 10px;
`
const UsernameContainer = styled.div`
  padding: 0 10px;
  color: #25BB41;
  font-weight: 600;
  border-right: #25BB41 1px solid;
`

const NavBar = styled.div`
  display: flex;

  align-items: flex-end;

  width: 100%;
  max-width: 960px;
  overflow-x: auto;
  white-space: nowrap;

  background-color: #fff;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMenuLink = styled(NavLink)`
  font-size: 1rem;
  color: #000;

  text-decoration: none;
  font-weight: 700;

  border-bottom: #fff solid;
  padding: 10px;
  &:hover {
    color: #25BB41;
  }
`;

type HeaderProps = {
    username?: string
}

const Header: FunctionComponent<HeaderProps> = ({ username }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(logout())
        history.push("/login")
    }

    return (
        <MainContainer>
            <InfoContainer>
                <NoStyleLink to={"/messages/all"}>
                    <Logo>EMI Project</Logo>
                </NoStyleLink>
                <UserInfo>
                    <UsernameContainer>{username}</UsernameContainer>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </UserInfo>
            </InfoContainer>
            <NavBar>
                <StyledMenuLink to="/messages" activeStyle={{borderBottom: "#25BB41 solid"}}>
                    Message Bank
                </StyledMenuLink>
                <StyledMenuLink exact to="/participants" activeStyle={{borderBottom: "#25BB41 solid"}}>
                    Participant
                </StyledMenuLink>
                <StyledMenuLink exact to="/questionnaires" activeStyle={{borderBottom: "#25BB41 solid"}}>
                    Questionnaire
                </StyledMenuLink>
            </NavBar>

        </MainContainer>
    )
}

export default Header;