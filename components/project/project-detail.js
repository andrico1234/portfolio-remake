import React, {Component} from 'react';

import Button from '../button/button';

class ProjectDetail extends Component {
    componentDidMount() {
        this.modalContainer.focus()
    }

    render() {
        const currentProject = this.props.details[this.props.modalIndex];

        const keyPress = (e) => {
            if (e.keyCode === 39) {
                nextProjectClick();
            } else if (e.keyCode === 37) {
                prevProjectClick();
            }
        };

        const nextProjectClick = () => {
            this.props.nextClick();
        };

        const prevProjectClick = () => {
            this.props.prevClick();
        };

        return (
            <div className="detail-container" ref={(cont) => {
                this.modalContainer = cont
            }} tabIndex="0" onKeyDown={keyPress}>
                <h2>
                    {currentProject.name}
                </h2>
                <img className="project-image" src={`static/${currentProject.image}`}/>
                <p>
                    {currentProject.description}
                </p>
                <a target="_blank" rel="noopener noreferrer" href={currentProject.destination}>
                    <Button text="Visit Site" />
                </a>
                <hr/>
                <div className="arrow-container">
                    <img onClick={prevProjectClick} className="prevArrow" src={`static/${'icon-arrow-down-overlay.svg'}`}/>
                    <h3 onClick={prevProjectClick} className="prevButton">Previous</h3>
                    <h3 onClick={nextProjectClick} className="nextButton">Next</h3>
                    <img onClick={nextProjectClick} className="nextArrow" src={`static/${'icon-arrow-down-overlay.svg'}`}/>
                </div>

                <style jsx>{`
                .detail-container {
                    display: grid;

                    h2 {
                        color: #e8535b;
                        font-size: 1.2em;
                        margin-top: 0;
                    }

                    .project-image {
                        border: 1px solid #34495d;
                        border-radius: 2px;
                        width: 100%;
                    }

                    h3, p {
                        color: #34495d;
                        letter-spacing: 0;
                        text-align: center;
                    }

                    h3 {
                        font-size: 0.9em;
                    }

                    p {
                        color: #4d4e4f;
                        font-size: 1em;
                        min-height: 115px;
                        padding: 16px 8px;

                        @media (min-width: 600px) {
                            min-height: 80px;
                        }

                        @media (min-width: 720px) {
                            min-height: 60px;
                        }
                    }

                    a {
                        justify-self: center;
                    }

                    hr {
                        margin-top: 20px;
                        width: 80%;
                    }

                    .arrow-container {
                        display: grid;
                        grid-template-columns: 15% 35% 35% 15%;

                        h3 {
                            cursor: pointer;
                            font-size: 0.8em;
                            margin: 0;
                            padding-top: 3px;
                        }

                        img {
                            cursor: pointer;
                            padding: 0 5px;
                            width: 20px;
                        }

                        .nextArrow {
                            transform: rotate(90deg);
                        }

                        .prevArrow {
                            transform: rotate(-90deg);
                        }

                        .prevArrow, .nextButton {
                            justify-self: right;
                        }

                        .nextArrow, .prevButton {
                            justify-self: left;
                        }
                    }
                }
            `}</style>
            </div>
        );
    }
};

export default ProjectDetail;