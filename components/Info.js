import React, { useState } from 'react';

function Info(props) {
    const MenuItems=["ssssss","sssssssssss","ssssss"]
    const {value,className}=props
    const [clickOn, setOnClick] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const Click = () =>{
        if(clickOn===true){
        setOnClick(false)
    }
    else{
        setOnClick(true)
    }
}
    const hoverOff=()=>{
        setOnClick(false)
    }
    return (
    <>
        {isClicked ? <li className="tick">{value}</li> :
        <li className="question" >{value} <i className={className} onClick={Click} /></li> 
        
    }
        {clickOn && 
        <div className="dropdown" onMouseLeave={hoverOff}>
            <p>{value}</p>
            <ul>
            {MenuItems.map((item) => {
                return (
                <li className="dropdown-content" >
                    {item}
                </li>
                );
            })}
            </ul><br/>
            <a className="per" onClick={() => setIsClicked(true)}>Add Feature</a>
        </div>
        }
    </>
    );
}
export default Info
