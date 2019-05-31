import React from 'react'

export default function Button({value, handleClick}) {
    return (
        <button onClick = {handleClick}  type="submit">{value}</button>
    )
}

// <button className="navBtn" onClick={() => clickHandler(prev)}>