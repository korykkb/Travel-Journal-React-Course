import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="img-side">
                    <img 
                        src={`../images/${props.imageUrl}`}
                        alt="Location"
                        className="card-image"
                    />
                </div>
                <div className="text-side">
                    <div className="location-container">
                        <div>{props.location}</div>
                        <div>{props.googleMapsUrl}</div>
                    </div>
                    <div className="body-container">
                        <div>{props.title}</div>
                        <div>{props.date}</div>
                        <div>{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}