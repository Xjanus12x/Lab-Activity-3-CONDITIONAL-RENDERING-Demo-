import { GreenButton,RedButton } from "./React-Demo-1"

 function TernaryOperator(props) {
    const isGreenBtn = props.isGreenBtn ?  <GreenButton/>:<RedButton/>
    return isGreenBtn
}

export function IsGreenBtn() {
    return <>
    <TernaryOperator isGreenBtn={true}/>
    <TernaryOperator isGreenBtn={false}/>
    </>
}