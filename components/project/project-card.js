import { Component } from 'react';

class ProjectCard extends Component {

    handleClick = () => {
        this.props.onClick(this.props.id);
    };

    render() {
        return (
            <li onClick={this.handleClick} className="work-item">
                <img src={`static/${this.props.project.image}`}/>
                <div className="content-container">
                    <h3>{this.props.project.name}</h3>
                    <p>{this.props.project.brief}</p>
                    <button>Learn more</button>
                </div>
                <style jsx>{`
                    .work-item {
                        cursor: pointer;
                        display: grid;
                        grid-template-columns: 100%;
                        grid-template-rows: 100%;
                        margin-bottom: 20px;
                        position: relative;
                        width: 90%;

                        &:hover p, &:hover h3, &:hover button {
                            opacity: 1;
                        }

                        &:hover img {
                            opacity: 0.4;
                        }

                        .content-container, img {
                            grid-column-start: 1;
                            grid-row-start: 1;
                        }

                        button {
                            background: transparent;
                            border: 1px solid #000;
                            border-radius: 1px;
                            bottom: 32px;
                            color: #000;
                            left: 32px;
                            padding: 10px;
                            position: absolute;

                            &:active {
                                box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.3);
                            }

                            &:hover {
                                cursor: pointer;
                            }
                        }

                        button, h3, img, p {
                            opacity: 0;
                            transition: opacity .25s linear;
                        }

                        h3 {
                            color: #000;
                            top: 10px;
                            padding: 0 32px;
                            position: relative;
                        }

                        img {
                            display: inline;
                            opacity: 1;
                            width: 100%;
                        }

                        p {
                            color: #000;
                            font-size: 0.8em;
                            font-weight: 500;
                            padding: 10px 32px;
                        }
                    }
                `}</style>
            </li>
        )
    }
}

export default ProjectCard;