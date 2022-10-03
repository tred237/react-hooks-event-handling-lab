import React from "react";

function EyesOnMe() {
    function handleFocus(){
        console.log('Good!')
    }

    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button type="button" onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe