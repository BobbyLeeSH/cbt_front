import React, {useEffect, useState} from "react";
import Select from 'react-select';

import Header from "./sub/Header";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../modules";
import {getUserInfo} from "../modules/user";
import {useHistory} from "react-router";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 960px;
  width: 100%;
  
 
  background-color: rgba(1, 1, 0, 0.04);
  border-radius: 2rem;
  padding: 2rem 3rem;
`

const Label = styled.div`
  color: #63A088;
  font-size: 2rem;
  font-weight: bold;
  align-self: flex-start;
  padding: 5px 0;
`

const ErrorMessage = styled.div`
  font-size: 1rem;
  height: 1rem;
  color: red;
  margin-top: 5px;
  text-align: center;
`

const SimpleInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 5px;
`

const ContentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0 5px;
`

const SubmitButton = styled.button`
  background-color: #63A088;
  color: white;
  
  border-radius: 1rem;
  padding: 10px;
  border: none;

  margin: 20px 0 0 0;
`

const TypeDropdown = styled(Select)`
  width: 100%;
  margin: 10px 0 0 0;
  
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #63A088;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 0;
`

const options = [
    {value: 'Hypertension', label: 'Hypertension'},
    {value: 'Psycho-education', label: 'Psycho-education'},
    {value: 'Greeting', label: 'Greeting'},
];

type TypeOption = { label: string, value: string }


const CreateParticipant = () => {
    const {username, roles} = useSelector((state: RootReducerType) => state.userInfo);

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [type, setType] = React.useState<TypeOption | null>(null)

    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])

    useEffect(() => {
        if (!roles.includes('ROLE_ADMIN') && !roles.includes('ROLE_MESSAGE')) history.push("/messages/all")
    }, [roles, history])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleTypeChange = (selectedOption: TypeOption) => {
        setType(selectedOption);
    };

    return (
        <MainContainer>
            <Header username={username}/>
            <BodyContainer>
                <Title>New Participant</Title>
                <Label>Message Name</Label>
                <SimpleInput value={name} onChange={handleNameChange} placeholder={"What is the name of the message?"}/>
                <ErrorMessage></ErrorMessage>
                <Label>Description</Label>
                <SimpleInput value={description} onChange={handleDescriptionChange}
                             placeholder={"What is the description of the message?"}/>
                <ErrorMessage></ErrorMessage>
                <Label>Content</Label>
                <ContentInput value={content} onChange={handleContentChange}
                              placeholder={"What is the content of the message?"}/>
                <ErrorMessage></ErrorMessage>
                <Label>Type</Label>
                <TypeDropdown
                    value={type}
                    onChange={handleTypeChange}
                    options={options}
                />
                <ErrorMessage></ErrorMessage>
                <SubmitButton>Submit</SubmitButton>
            </BodyContainer>
        </MainContainer>
    )
}

export default CreateParticipant;
