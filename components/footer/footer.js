import Images from './images/images';

export default () => (
    <div className="footer-wrapper">
        <footer>
            <h1>Contact.</h1>
            <p>
                If you have any questions or queries about my work, or would like an interactive website built, then don't hesitate to drop me an email. You can reach out to me on social media via the icons below.
            </p>
            <button>Contact Me</button>
        </footer>
        <Images/> <img className="arrow" src="static/icon-arrow-up.svg"/>

        <style jsx>{`
        .footer-wrapper {
            background-color: #e8535b;
            padding-top: 20px;
        }

        footer {
            color: white;
            margin: 0 auto;
            width: 90%;

            @media (min-width: 1020px) {
                h1 {
                    text-align: center;
                }
            }

            .arrow {

            }
        }
    `}</style>
    </div>
)