import React from 'react'

export default function Button({value, handleEvent, className}) {
    return (
        <div className = "prev">
            <button type="submit">{value}</button>
        </div>
    )
}
