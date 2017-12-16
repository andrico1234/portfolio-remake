import React from 'react';

import SkillImage from './skill-image';

export default (props) => {

    const skillIcons = props.icons.map((skill, i) => {
        return <SkillImage key={i} src={`static/${skill}`} />
    });

    return (
        <div>
            <h2>{props.name}</h2>
            <div>
                {skillIcons}
            </div>

            <style jsx>{`
                h2 {
                    color: #4d4e4f;
                    font-size: 1em;
                }
            `}</style>
        </div>
    )
};