import { useMemo, useState } from "react"

// In below, you can see an example of using useMemo.

export default function UseMemoExample() {
    document.title = "React - useMemo Example"
    const [name, setName] = useState(null)
    const [age, setAge] = useState(0)
    const countBirthYear = () => {
        for(let i = 0; i <= 1000000000; i ++) {  }
        return 2022 - age
    }
    const yearOfBirth = useMemo(() => {
        return countBirthYear()
        // eslint-disable-next-line
    }, [age])
    
    return(
        <>
            <input onChange={ (e) => { setName(e.target.value) } } placeholder="Your name?" type="text"/>
            <input onChange={ (e) => { setAge(e.target.value) } } placeholder="Your age?" type="number"/>
            <div>Name : { name }</div>
            <div>Year of Birth : { yearOfBirth }</div>
        </>
    )
}