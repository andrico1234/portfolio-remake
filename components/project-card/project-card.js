export default () => <div>
    <ul>
        <li className="work-item">
            <img src="static/dashboard-screen.png"/>
            <div className="content-container">
                <h3>Web App Dashboard</h3>
                <p>A responsive web app dashboard</p>
                <button>Learn More.</button>
            </div>
        </li>
        <li className="work-item">
            <img/>
            <h3>Web App Dashboard</h3>
            <p>A responsive web app dashboard</p>
            <button>Learn More.</button>
        </li>
    </ul>

    {/*// css grid shit in here yo. two items a row*/} {/*place picture detail on topp of the img, using css grids*/}


    <style jsx>{`
        ul {
            @media (min-width: 768px) {
                padding-bottom: 40px;
            }
        }

        .work-item {
            margin-bottom: 20px;
            width: 100%;

            @media (min-width: 768px) {
                display: inline-block;
            }

            button {
                background: white;
                border: 1px solid #34495d;
                bottom: 20px;
                left: 20px;
                padding: 10px;

                &:active {
                    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.3);
                }
            }

            h3 {
                left: 5px;
                top: -10px;
                padding: 10px 20px;

                &:hover {
                    opacity: 1;
                }
            }

            img {
                height: 100%;
                opacity: 1;
                transition: opacity .25s linear;
                width: 100%;

                &:hover {
                    opacity: 0.4;
                }
            }

            p {
                font-size: 0.8em;
                font-weight: 500;
                left: 5px;
                top: 30px;
                padding: 10px 20px;

                &:hover {
                    opacity: 1;
                }
            }
        }
    `}</style>
</div>
