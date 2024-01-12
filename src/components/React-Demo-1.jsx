export const RedButton = ()=> {
    const handleClick = () => {
        alert("I am a red button!")
    }
    return <>    
    <button className="bg-red text-white text-bold" onClick={handleClick}>Click Me</button>
    </>
}

export function GreenButton() {
    const handleClick = () => {
        alert("I am a green button!")
    }
    return <>
    
    <button className="bg-green text-white text-bold" onClick={handleClick}>Click Me</button>


    </>
}

export function CustomButton(props) {
    const handleClick = () => {
        alert(`${props.alertMsg}`)
    }

    return <>
    
    <button  className={`${props.class}`} onClick={handleClick}>{props.content}</button>
    
    </>
}


