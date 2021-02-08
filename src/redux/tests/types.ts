export const ADD_TEST = 'ADD_TEST'
export const REMOVE_TEST = 'REMOVE_TEST'

interface AddTestAction {
    type: typeof ADD_TEST
}

interface RemoveTestAction {
    type: typeof REMOVE_TEST
}

export type TestActionTypes = AddTestAction | RemoveTestAction
