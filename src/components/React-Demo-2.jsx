import { RedButton,GreenButton} from "./React-Demo-1";

export function ConditionalButton(props) {
     if(props.isRed) {
        return <RedButton/>
    } 
    
    return <GreenButton/>
   
}