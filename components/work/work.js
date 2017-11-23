import ProjectCard from '../project-card/project-card';

export default () =>
    <div className="work-wrapper">
        <h1>
            Work.
        </h1>
        <ProjectCard />

        <style jsx>{`
            .work-wrapper {
                margin: 0 auto;
                width: 90%;

                p {
                    color: #e8535b;
                }
            }
        `}</style>
    </div>
