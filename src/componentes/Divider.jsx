import React from "react";

const Divider = ({width, height, color, clas = ""}) => {
    return (
        <>
            <span className={"divider flex "+clas} style={{width:width, borderBlockStartColor:color, borderBlockStartWidth:height, borderBlockStartStyle:"solid", borderRadius:"25px"}}></span>
        </>
    )
}

export default Divider;