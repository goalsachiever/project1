function RoundedLink(props) {
    const themeClasses = props.theme === "white" 
    ? 'text-white border-white' 
    : 'text-black border-black';

    return (

        <a className={"flex-shrink-0  p-1 px-4 py-2 font-semibold tracking-wider  border  rounded-full text-13 text-white "+ themeClasses  } 
           {...props}        
           >
            {props.children}
             
        </a>

    );
}
export default RoundedLink;

// href={props.linkUrl}  spread operator