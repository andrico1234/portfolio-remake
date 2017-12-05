const ProjectDetail = (props) => {
    const currentProject = props.details[props.modalIndex - 1];

    return (
        <div className="detail-container">
            <h2>
                {currentProject.name}
            </h2>
            <img src={`static/${currentProject.image}`}/>
            <h3>
                Project {currentProject._id}
            </h3>
            <p>
                {currentProject.description}
            </p>
            <a href={currentProject.destination}>
                <button>
                    Visit Site
                </button>
            </a>
            <hr/>
            <div>
                <img className="prevArrow" src={`static/${'icon-arrow-down-overlay.svg'}`}/> Previous
            </div>
            <div>
                <img className="nextArrow" src={`static/${'icon-arrow-down-overlay.svg'}`}/> Next
            </div>

            <style jsx>{`
                .detail-container {
                    width: 90%;

                    h2 {
                        color: #e8535b;
                        margin-top: 0 auto;
                    }

                    img {
                        border: 1px solid #34495d;
                        border-radius: 2px;
                        width: 100%;
                    }

                    h3, p {
                        color: #34495d;
                        font-size: 0.9em;
                        letter-spacing: 0;
                        margin: 0 auto;
                        padding: 10px;
                        text-align: center;
                    }

                    button {
                        background-color: white;
                        border: 1px solid #e8535b;
                        border-radius: 2px;
                        color: #e8535b;
                        height: 40px;
                        width: 90px;
                    }

                    hr {
                        width: 80%;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectDetail;