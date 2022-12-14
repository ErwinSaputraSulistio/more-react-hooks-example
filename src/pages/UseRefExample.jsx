import { useRef } from "react"

// Stop using useState and onChange for input, because it'll re-render each time you type.
// useRef is a better solution to use, when you only need to store values, but don't need any page re-renders.
// useRef is also recommended to be used, when your values are only used once.
// For an use-case example of useRef, see below.
export default function UseRefExample() {
    document.title = "React - useRef Example"
    const usernameRef = useRef()
    const passwordRef = useRef()

    const login = (e) => {
        e.preventDefault()
        console.log({
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })
    }

    return(
        <form onSubmit={ login }>
            <label htmlFor="username">Username</label>
            <input ref={ usernameRef } type="username"/>
            <label htmlFor="password">Password</label>
            <input ref={ passwordRef } type="password"/>
            <button type="submit">Login</button>
        </form>
    )
}