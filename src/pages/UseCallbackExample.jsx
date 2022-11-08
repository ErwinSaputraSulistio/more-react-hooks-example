import { useCallback, useState } from "react"

// useCallback is very similar to useMemo, but with one big difference.
// useCallback is returned as a function, while useMemo is returned as a value.
export default function UseCallbackExample() {
    document.title = "React - useCallback Example"
    const [name, setName] = useState(null)
    const [age, setAge] = useState(0)
    const countBirthYear = () => {
        for(let i = 0; i <= 1000000000; i ++) {  }
        return 2022 - age
    }
    const yearOfBirth = useCallback(() => {
        return countBirthYear()
        // eslint-disable-next-line
    }, [age])
    
    return(
        <>
            <input onChange={ (e) => { setName(e.target.value) } } placeholder="Your name?" type="text"/>
            <input onChange={ (e) => { setAge(e.target.value) } } placeholder="Your age?" type="number"/>
            <div>Name : { name }</div>
            <div>Year of Birth : { yearOfBirth() }</div>
        </>
    )
}