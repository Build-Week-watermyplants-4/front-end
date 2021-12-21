import React from "react";


export default function HomeFeature(props) {
    const { title, description } = props;

    return (
        <div className = 'feature'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}