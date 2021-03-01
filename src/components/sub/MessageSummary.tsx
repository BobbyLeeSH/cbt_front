import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {useHistory} from "react-router";

const MainContainer = styled.div`
  display: flex;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 1rem;
  border: #63A088 solid 2px;
  height: 200px;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  
  cursor: pointer;
`

const NameContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color:#63A088;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 3px 0;
`

const DescriptionContainer = styled.div`
  font-size: 1rem;
  padding: 5px 0;
  position: relative;
  
  color: #c6c6c6;
   
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ContentContainer = styled.div`
  font-size: 1rem;
  position: relative;
  
  border-radius: 1rem;
  background-color: #F2F7F5;
  padding: 5px 10px;
    
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: pre-wrap;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`

const TypeContainer = styled.div`
  font-size: 1rem;
  padding: 5px 0;
  position: relative;
  font-weight: bold;
  color:#63A088;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`


type MessageSummaryProps = {
    id: number,
    name: string,
    description: string,
    content: string,
    type: string
}

const MessageSummary: FunctionComponent<MessageSummaryProps> = ({id, name, description, content, type}) => {
    const history = useHistory()
    const handleClickSummary = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        history.push("/messages/detail/1")
    }

    return (
        <MainContainer onClick={handleClickSummary}>
            <NameContainer>{name}</NameContainer>
            <DescriptionContainer>{description}</DescriptionContainer>
            <ContentContainer>{content}</ContentContainer>
            <TypeContainer>{type}</TypeContainer>
        </MainContainer>
    )
}

export default MessageSummary;