import React, { Component } from 'react';
import Project from './project';
import { connect } from 'react-redux';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                {console.log(this.props.projects)}
                {this.props.projects && this.props.projects.map(project => {
                    return (
                        <Project project={project.title} key={project.id} />
                    )
                })}
                <Project />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Projects);