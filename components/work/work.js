import React, { Component } from "react";
import ReactModal from "react-modal";

import modalStyles from "../../services/modal-styles";
import { portfolioProjects } from "../../static/data.json";
import ProjectCard from "../project/project-card";
import ProjectDetail from "../project/project-detail";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      modalIndex: 0,
      showModal: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.prevProject = this.prevProject.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal(modalIndex) {
    this.setState({
      modalIndex,
      showModal: true
    });
  }

  nextProject() {
    const newIndex =
      this.state.modalIndex < portfolioProjects.length - 1
        ? this.state.modalIndex + 1
        : 0;
    this.openModal(newIndex);
  }

  prevProject() {
    const newIndex =
      this.state.modalIndex === 0
        ? portfolioProjects.length - 1
        : this.state.modalIndex - 1;
    this.openModal(newIndex);
  }

  render() {
    const projectCardItems = portfolioProjects.map((project, i) => {
      return (
        <ProjectCard
          onClick={this.openModal}
          key={i}
          id={i}
          project={project}
        />
      );
    });

    return (
      <div className="work-wrapper">
        <h1>Work.</h1>
        <ul>{projectCardItems}</ul>
        <ReactModal
          ariaHideApp={false}
          style={modalStyles}
          onRequestClose={this.closeModal}
          isOpen={this.state.showModal}
          contentLabel="Project Modal"
        >
          <ProjectDetail
            nextClick={this.nextProject}
            prevClick={this.prevProject}
            modalIndex={this.state.modalIndex}
            details={portfolioProjects}
          />
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
            max-width: 1300px;
            width: 90%;

            h1 {
              color: #e8535b;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Work;
