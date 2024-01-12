export function ConditionalFormatting2(props) {
    return <>
    
    <button className={`${props.isDarkBtn?  'bg-dark text-white text-bold' : 'bg-white text-black text-bold border-black'}`}>{props.isDarkBtn? 'Dark Button': 'Normal Button'}</button>
    
    </>
}