import React from "react";

const Hello = props => {
    const style ={
        background: props.background,
        color: props.color

    }
    if (isNaN(props.id) === false){
        return (
            <div>
            <h1>The number: {props.id}</h1>
        </div>
        )
    }
    else
        return (
            <div>
                <h1 style={style}>The word:{props.id}</h1>
            </div>
        )
}
export default Hello; 










// import React from "react";

// const Hello = props => {
//     return (
//         <div>
//             <h1>The Word is: {props.id}</h1>
//         </div>
//     )
// }
// export default Hello;