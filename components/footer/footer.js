import Images from './images/images';

export default () => (
    <div className="footer-wrapper">
        <footer>
            <h1>Contact.</h1>
            <p>
                If you have any questions or queries about my work, or would like an interactive website built, then don't hesitate to drop me an email. You can reach out to me on social media via the icons below.
            </p>
            <div className="button-container">
                <button>Contact Me</button>
            </div>
            <Images/>

            <div className="arrow-container">
                <img src="static/icon-arrow-up.svg"/>
            </div>

        </footer>

        <style jsx>{`
        .footer-wrapper {
            background-color: #e8535b;
            padding-top: 20px;
        }

        footer {
            color: white;
            margin: 0 auto;
            max-width: 1600px;
            width: 90%;

            .arrow-container {
                padding: 10px 0 20px 0;
                text-align: right;
                width: 100%;

                img {
                    width: 30px;
                }
            }

            .button-container {
                padding: 15px 0;
                text-align: center;
                width: 100%;
            }

            button {
                background-color: #e8535b;
                border: 1px solid white;
                border-radius: 1px;
                color: white;
                height: 45px;
                padding: 12px 0 20px 0;
                text-align: center;
                width: 135px;

                &:active {
                    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
                }
            }
        }
    `}</style>
    </div>
)