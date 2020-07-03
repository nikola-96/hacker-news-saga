import React, { useEffect } from 'react'
import './storie-preview.style.css'
import { Link, Route } from 'react-router-dom'


const StoriePreview = ({ storie }) => {
    const { kids } = storie
    return (
        <div className="bg-light py-2">
            <div className="d-flex">
                <div>
                    <span className="mx-2">1.</span>
                    <span>▲</span>
                </div>
                <a href={storie.url} target="_blank" rel="noopener noreferrer" className="h6 my-0 mx-2 text-dark">
                    {storie.title}
                    <a href="/#" className="my-0" > ss</a>
                </a>
            </div>
            <div className="d-flex flex-wrap" >
                <p className="my-0 mx-1"> {storie.score} points</p>
                <a href="/#" className="my-0 mx-1">by {storie.by}</a>|
                <a href="/#" className="my-0 mx-1">hide</a>|
                <Link
                    to={{
                        pathname: `/comments/${storie.id}`,
                        data: storie
                    }}
                    className="my-0 mx-1"
                >
                    {storie.descendants ? storie.descendants : 0} comments
                </Link>

            </div>
        </div >
    )
}

export default StoriePreview