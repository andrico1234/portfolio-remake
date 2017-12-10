import NavBar from '../navbar/navbar';

export default () => (
    <div className="header-wrapper">
        <header>
            <NavBar/>
            <h1>
                Hello.
            </h1>
            <p>
                A JavaScript developer based in London, my work is an amalgamation of sleek and modern design with fluid interactivity.
            </p>
            <img className="arrow-down" src="static/icon-arrow-down.svg"/>
        </header>

        <style jsx>{`
            .header-wrapper {
                background: #34495d;
                background-image: url("static/laptop-image-desktop-trans.png");
                background-repeat: no-repeat;
                background-position: center;
                height: 350px;
            }

            header {
                color: white;
                margin: 0 auto;
                max-width: 1300px;
                padding-top: 30px;
                position: relative;
                width: 90%;

                h1 {
                    @media (min-width: 768px) {
                        padding-bottom: 20px;
                    }
                }

                p {
                    line-height: 1.2;
                    max-width: 440px;

                    @media (min-width: 768px) {
                        line-height: 1.8;
                        width: 60%;
                    }
                }

                .arrow-down {
                    margin: 0 auto;
                    transform: rotate(180deg);
                    width: 30px;

                    @media (min-width: 768px) {
                        padding-bottom: 15px;
                    }
                }
            }
        `}</style>
    </div>
)