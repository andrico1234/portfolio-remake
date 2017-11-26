import {Component} from 'react';

import {portfolioProjects} from '../../static/data.json';
import ProjectCard from '../project-card/project-card';

class Work extends Component {
    render() {
        const projectCardItems = portfolioProjects.map((project) => {
            return <ProjectCard key={project._id} name={project.name} brief={project.brief} image={project.image}/>
        });

        return (
            <div className="work-wrapper">
                <h1>
                    Work.
                </h1>
                <ul>
                    {projectCardItems}
                </ul>

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

