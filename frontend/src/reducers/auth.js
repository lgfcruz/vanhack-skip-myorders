import { TOKEN_VALIDATED, FORM_VALIDATED, USER_FETCHED } from '../types/auth'

const userKey = process.env.REACT_APP_USER_KEY

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
    validForm: false
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case FORM_VALIDATED:
            return { ...state, validForm: action.payload }
        case USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}