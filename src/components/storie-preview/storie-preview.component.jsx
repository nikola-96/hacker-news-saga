import React from 'react'
import './storie-preview.style.css'

const StoriePreview = () => (
    <div className="bg-light py-2">
        <div className="d-flex">
            <div>
                <span className="mx-2">1.</span>
                <span>▲</span>
            </div>
            <a href='/#' target="_blank" rel="noopener noreferrer" className="h6 my-0 mx-2 text-dark">
                title
            <a href="/#" className="my-0" > host</a>
            </a>
        </div>
        <div className="d-flex flex-wrap" >
            <p className="my-0 mx-1"> points</p>
            <a href="/#" className="my-0 mx-1"></a>
            <a href="/#" className="my-0 mx-1"></a>
            <a href="/#" className="my-0 mx-1">hide</a>
        </div>
    </div >
)

export default StoriePreview