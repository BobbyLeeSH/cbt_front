import React, {useEffect, useLayoutEffect, useState} from "react";
import Header from "./sub/Header";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../modules";
import {getUserInfo} from "../modules/user";
import MessageSummary from "./sub/MessageSummary";
import {useHistory} from "react-router";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  position: relative;
  
  max-width: 960px;
  width: 100%;
`

const NewMessageButtonContainer = styled.div`
  position: absolute;
  right: 8rem;
`;

const NewMessageButton = styled.button`
  position: fixed;
  bottom: 30px;
  border-radius: 1rem;
  padding: 10px 5px;
  color: #fff;
  border: #25BB41 1px solid;
  background-color: #63A088;
`;

const Message = () => {
    const {username, roles} = useSelector((state: RootReducerType) => state.userInfo);
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);
    const history = useHistory()

    useLayoutEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])

    useEffect(() => {
        if (roles.includes('ROLE_ADMIN') || roles.includes('ROLE_MESSAGE')) setIsEditable(true)
    }, [roles])
    return (
        <MainContainer>
            <Header username={username}/>
            <BodyContainer>
                <MessageSummary id={1} name={"Hypertension-1"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"First message for hypertension"}/>
                <MessageSummary id={2} name={"Hypertension-2"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Second message for hypertension"}/>
                <MessageSummary id={3} name={"Hypertension-3"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Third message for hypertension"}/>
                <MessageSummary id={4} name={"Hypertension-4"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Fourth message for hypertension"}/>
                <MessageSummary id={5} name={"Hypertension-5"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Fifth message for hypertension"}/>
                <MessageSummary id={6} name={"Hypertension-6"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Sixth message for hypertension"}/>
                <MessageSummary id={7} name={"Hypertension-7"} type={"HYPERTENSION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Seventh message for hypertension"}/>
                <MessageSummary id={8} name={"Psycho-education-1"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"First message for Psycho_education"}/>
                <MessageSummary id={9} name={"Psycho-education-2"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Second message for Psycho_education"}/>
                <MessageSummary id={3} name={"Psycho-education-3"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Third message for Psycho_education"}/>
                <MessageSummary id={4} name={"Psycho-education-4"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Fourth message for Psycho_education"}/>
                <MessageSummary id={5} name={"Psycho-education-5"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Fifth message for Psycho_education"}/>
                <MessageSummary id={6} name={"Psycho-education-6"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Sixth message for Psycho_education"}/>
                <MessageSummary id={7} name={"Psycho-education-7"} type={"PSYCHO_EDUCATION"}
                                content={"Hi, {{name}}. \nHow are you today? This is sample message template \ntest"}
                                description={"Seventh message for Psycho_education"}/>
                <MessageSummary id={2} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={3} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={4} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={5} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={6} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={7} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={8} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <MessageSummary id={9} name={"1234"} type={"123"} content={"1"} description={"11"}/>
                <NewMessageButtonContainer>
                    {isEditable ? <NewMessageButton onClick={() => {history.push("/messages/new")}}> New Message </NewMessageButton> : null}
                </NewMessageButtonContainer>
            </BodyContainer>
        </MainContainer>
    );
}

export default Message;
