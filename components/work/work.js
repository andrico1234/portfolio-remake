import React, {Component} from 'react';
import ReactModal from 'react-modal';

import {portfolioProjects} from '../../static/data.json';
import ProjectCard from '../project/project-card';
import ProjectDetail from '../project/project-detail';

const modalStyles = {
    content: {
        background: 'white',
        borderRadius: '2px',
        bottom: '-200px',
        left: '50%',
        marginRight: '-50%',
        maxWidth: '800px',
        outline: 'none',
        overflow: 'auto',
        padding: '20px',
        position: 'absolute',
        top: '50%',
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
    }

    closeModal() {
        this.setState({showModal: false});
    }

    openModal(modalIndex) {
        this.setState({
            showModal: true,
            modalIndex
        });
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
                    contentLabel="Project Modal"> <ProjectDetail modalIndex={this.state.modalIndex} details={portfolioProjects}/>
                </ReactModal>

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
                        max-width: 1600px;
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

