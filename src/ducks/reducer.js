const initialState = {
    email: '',
    password: '',
    passwordRe: '',
    onlineID: '',
    firstName: '',
    lastName: '',

}

const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_PASSWORDRE = "UPDATE_PASSWORDRE";
const UPDATE_ONLINEID = "UPDATE_ONLINEID";
const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_EMAIL:
        return {...state, email: action.payload};
        case UPDATE_PASSWORD:
        return {...state, password: action.payload};
        case UPDATE_PASSWORDRE:
        return {...state, passwordRe: action.payload};
        case UPDATE_ONLINEID:
        return {...state, onlineID: action.payload};
        case UPDATE_FIRSTNAME:
        return {...state, firstName: action.payload};
        case UPDATE_LASTNAME:
        return {...state, lastName: action.payload};
        default:
            return state;
    }
}

export function updateEmail( email ){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export function updatePassword( password ){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function updatePasswordRe( passwordRe ){
    return {
        type: UPDATE_PASSWORDRE,
        payload: passwordRe
    }
}

export function updateOnlineID( onlineID ){
    return {
        type: UPDATE_ONLINEID,
        payload: onlineID
    }
}

export function updateFirstName( firstName ){
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstName
    }
}

export function updateLastName( lastName ){
    return {
        type: UPDATE_LASTNAME,
        payload: lastName
    }
}