import React, {useEffect, useState} from "react";
import Select from 'react-select';

import Header from "./sub/Header";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../modules";
import {getUserInfo} from "../modules/user";
import {useHistory, useParams} from "react-router";

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

const TypeDropdown = styled(Select)`
  width: 100%;
  margin: 10px 0 0 0;
`
const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #63A088;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 0;
`

const EditButton = styled.button`
  background-color: #63A088;
  color: white;
  
  border-radius: 1rem;
  padding: 5px 10px;
  border: none;
`


const options = [
    {value: 'Hypertension', label: 'Hypertension'},
    {value: 'Psycho-education', label: 'Psycho-education'},
    {value: 'Greeting', label: 'Greeting'},
];

type TypeOption = { label: string, value: string }


const MessageDetail = () => {
    const {username, roles} = useSelector((state: RootReducerType) => state.userInfo);

    const [name, setName] = useState("Hypertension-1")
    const [description, setDescription] = useState("First message for hypertension")
    const [content, setContent] = useState("Hi, {{name}}. \nHow are you today? This is sample message template \ntest")
    const [type, setType] = React.useState<TypeOption | null>({value: 'Hypertension', label: 'Hypertension'})

    const [isNameDisabled, setNameDisabled] = React.useState<boolean>(true)
    const [isDescDisabled, setDescDisabled] = React.useState<boolean>(true)
    const [isContentDisabled, setContentDisabled] = React.useState<boolean>(true)
    const [isTypeDisabled, setTypeDisabled] = React.useState<boolean>(true)

    const [isEditable, setIsEditable] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    interface ParamTypes {
        messageId: string
    }

    let {messageId} = useParams<ParamTypes>()


    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])

    useEffect(() => {
        if (!roles.includes('ROLE_ADMIN') && !roles.includes('ROLE_MESSAGE')) history.push("/messages/all")
        if (roles.includes('ROLE_ADMIN') || roles.includes('ROLE_MESSAGE')) setIsEditable(true)
    }, [roles, history])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNameEdit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setNameDisabled(!isNameDisabled)
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleDescEdit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setDescDisabled(!isDescDisabled)
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleContentEdit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setContentDisabled(!isContentDisabled)
    };

    const handleTypeChange = (selectedOption: TypeOption) => {
        setType(selectedOption);
    };

    const handleTypeEdit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setTypeDisabled(!isTypeDisabled)
    };

    return (
        <MainContainer>
            <Header username={username}/>
            <BodyContainer>
                <Title>Message ID: {messageId}</Title>

                <LabelWrapper>
                    <Label>Message Name</Label>
                    {isEditable ? <EditButton onClick={handleNameEdit}>{isNameDisabled ? "Edit" : "Save"}</EditButton> : null}
                </LabelWrapper>
                <SimpleInput disabled={isNameDisabled} value={name} onChange={handleNameChange}/>
                <ErrorMessage></ErrorMessage>

                <LabelWrapper>
                    <Label>Description</Label>
                    {isEditable ? <EditButton onClick={handleDescEdit}>{isDescDisabled ? "Edit" : "Save"}</EditButton> : null}
                </LabelWrapper>
                <SimpleInput disabled={isDescDisabled} value={description} onChange={handleDescriptionChange}/>
                <ErrorMessage></ErrorMessage>

                <LabelWrapper>
                    <Label>Content</Label>
                    {isEditable ? <EditButton onClick={handleContentEdit}>{isContentDisabled ? "Edit" : "Save"}</EditButton> : null}
                </LabelWrapper>
                <ContentInput disabled={isContentDisabled} value={content} onChange={handleContentChange}/>
                <ErrorMessage></ErrorMessage>

                <LabelWrapper>
                    <Label>Type</Label>
                    {isEditable ? <EditButton onClick={handleTypeEdit}>{isTypeDisabled ? "Edit" : "Save"}</EditButton> : null}
                </LabelWrapper>
                <TypeDropdown
                    value={type}
                    onChange={handleTypeChange}
                    options={options}
                    isDisabled={isTypeDisabled}
                />
                <ErrorMessage></ErrorMessage>
            </BodyContainer>
        </MainContainer>
    )
}

export default MessageDetail;
