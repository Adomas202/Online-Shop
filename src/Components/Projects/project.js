import React from 'react';

const Project = ({project}) => {
    return (
        <div className="card">
            <p>{project.title}</p>
        </div>
    )
}

export default Project;