import { useReducer } from "react"

const initialState = { isNight: false }

function reducer(state, action) {
    switch(action.type) {
        case "day":
            return { isNight: false }
        case "night":
            return { isNight: true }
        default:
            throw new Error()
    }
}

export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState)
    document.title = "React - useReducer Example"
    return(
        <div style={ 
            state.isNight === true ? { 
                background: "black",
                height: "100vh", 
                width: "100vw" 
            } 
            : 
            null 
        }>
            <button onClick={ () => { dispatch({ type: "day" }) } }>Day</button>
            <button onClick={ () => { dispatch({ type: "night" }) } }>Night</button>
        </div>
    )
}