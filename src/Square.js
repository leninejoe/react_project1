import React from 'react'

const Square =({colorValue, hexValue, isDarkText}) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{colorValue ? colorValue :"Empty Color Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Square.defaultProps = {
    colorvalue: "Empty color Value"
}

export default Square