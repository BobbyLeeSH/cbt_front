import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {addTest} from "../redux/tests/actions";
import styled from "styled-components";

interface RootState {
    count: number
}

const mapStateToProps = (state: RootState) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    addTest
}

const connector = connect(mapStateToProps, mapDispatchToProps)

// The inferred type will look like:
// {count: number, addTest: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    backgroundColor: string
}

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
  width: 80vw;
  height: 90vh;
  font-size: 2rem;
`

const FlexDiv = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`

const Test = ({count, addTest}: Props) => {
    return (
        <MainContainer>
            <BodyContainer>
                <FlexDiv>Hello</FlexDiv>
                <FlexDiv>
                    hello this is test: {count}
                </FlexDiv>
                <FlexDiv>
                    <button onClick={() => addTest()}>Add Test</button>
                </FlexDiv>
            </BodyContainer>
        </MainContainer>

    );
}


export default connector(Test);
