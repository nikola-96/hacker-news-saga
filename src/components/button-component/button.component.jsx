import React from 'react'

const CustomButton = ({ children, ...otherPros }) => {

    return (
        <button type="button" className="btn btn-warning"{...otherPros}>{children}</button>)
}
export default CustomButton