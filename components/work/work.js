import React, {Component} from 'react';
import ReactModal from 'react-modal';

import {portfolioProjects} from '../../static/data.json';
import ProjectCard from '../project/project-card';
import ProjectDetail from '../project/project-detail';

const modalStyles = {
    content: {
        background: 'white',
        borderRadius: '2px',
        bottom: 'auto',
        minHeight: 'fit-content',
        left: '50%',
        marginRight: '-50%',
        maxWidth: '800px',
        outline: 'none',
        overflow: 'auto',
        padding: '20px',
        position: 'absolute',
        top: '48%',
        transform: 'translate(-50%, -50%)',
        width: '85%'
    },
    overlay: {
        background: 'rgba(55, 55, 55, 0.5)',
        bottom: '0',
        left: '0',
        position: 'fixed',
        right: '0',
        top: '0'
    }
};

class Work extends Component {
    constructor() {
        super();

        this.state = {
            modalIndex: 1,
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
    }

    closeModal() {
        this.setState({showModal: false});
    }

    openModal(modalIndex) {
        this.setState({
            modalIndex,
            showModal: true
        });
    }

    nextProject() {
        const newIndex = this.state.modalIndex < portfolioProjects.length ? this.state.modalIndex + 1 : 1;
        this.openModal(newIndex);
    }

    prevProject() {
        const newIndex = this.state.modalIndex === 1 ? portfolioProjects.length : this.state.modalIndex - 1;
        this.openModal(newIndex);
    }

    render() {
        const projectCardItems = portfolioProjects.map((project) => {
            return <ProjectCard onClick={this.openModal} key={project._id} project={project}/>
        });

        return (
            <div className="work-wrapper">
                <h1>
                    Work.
                </h1>
                <ul>
                    {projectCardItems}
                </ul>
                <ReactModal
                    ariaHideApp={false}
                    style={modalStyles}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.showModal}
                    contentLabel="Project Modal"> <ProjectDetail
                    nextClick={this.nextProject}
                    prevClick={this.prevProject}
                    modalIndex={this.state.modalIndex}
                    details={portfolioProjects}
                /> </ReactModal>

                <style jsx>{`
                    ul {
                        display: grid;
                        grid-template-columns: 100%;
                        justify-items: center;
                        padding-left: 0;

                        @media (min-width: 768px) {
                            grid-template-columns: 50% 50%;
                            padding-bottom: 40px;
                        }
                    }

                    .work-wrapper {
                        margin: 0 auto;
                        max-width: 1300px;
                        width: 90%;

                        h1 {
                            color: #e8535b;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Work;

