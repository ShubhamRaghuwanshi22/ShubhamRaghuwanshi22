export const initialState ={
statenew:false
}
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "welcome":
            return{
                ...state,
                action
            }

    default:
    return newState
}
}
export default reducer