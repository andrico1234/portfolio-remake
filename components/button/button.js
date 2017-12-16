import React from 'react';

export default (props) => (
    <div>
        <button>
            {props.text}
        </button>

        <style jsx>{`
            button {
                background-color: white;
                border: 1px solid #e8535b;
                border-radius: 2px;
                color: #e8535b;
                cursor: pointer;
                font-size: 0.9em;
                height: 40px;
                width: 90px;

                &:active {
                    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
                }
            }
        `}</style>
    </div>
)