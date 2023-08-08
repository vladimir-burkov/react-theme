import { useContext } from "react"
import { MessageContext } from "../providers/modal/messageContext"

export default function ChildComponent(props: any) {
    const setGlobalError = useContext(MessageContext)

    return (
    <>
        <button onClick={() => {setGlobalError({ message: "olololo", type: 'error' })}}>change state</button>
    </>
    )
    
}