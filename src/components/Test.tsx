import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {addTest} from "../redux/tests/actions";

interface RootState {
    count: number
}

const mapStateToProps = (state: RootState) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps =  {
    addTest
}

const connector = connect(mapStateToProps, mapDispatchToProps)

// The inferred type will look like:
// {count: number, addTest: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    backgroundColor: string
}

const Test = ({count, addTest}: Props) => {
    return (
        <h2>
            hello this is test: {count}
            <div>
                <button onClick={() => addTest()}>Add Test</button>
            </div>
        </h2>
    );
}


export default connector(Test);
