import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="img-side">
                    <img 
                        src={require(`../images/${props.image}`)}
                        alt="Location"
                        className="card-image"
                    />
                </div>
                <div className="text-side">
                    <div className="location-container">
                        <div className="prop-location">
                            <i className="fa-solid fa-location-dot"></i>
                            {props.location}</div>
                        <a 
                            href={props.googleMapsUrl} 
                            target="_blank"
                            rel="noreferrer"
                        >View on Google Maps</a>
                    </div>
                    <div className="body-container">
                        <div className="prop-title">{props.title}</div>
                        <div className="prop-date">{props.date}</div>
                        <div className="prop-description">{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}