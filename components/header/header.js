import NavBar from '../navbar/navbar';

export default () =>
    <div className="header-wrapper">
        <header>
            <NavBar />
            <h1>
                Hello.
            </h1>
            <p>
                A JavaScript developer based in London, my work is an amalgamation of sleek and modern design with fluid interactivity.
            </p>
            <img className="arrow-down" src="static/icon-arrow-down.svg" />
        </header>

        <style jsx>{`
            .header-wrapper {
                background: #34495d;
            }

            header {
                color: white;
                height: 380px;
                margin: 0 auto;
                max-width: 1600px;
                padding-top: 30px;
                position: relative;
                width: 90%;

                @media (min-width: 768px) {
                    height: 340px;
                }

                h1 {
                    padding-bottom: 20px;
                }

                p {
                    line-height: 1.8;

                    @media (min-width: 768px) {
                        width: 60%;
                    }
                }

                .arrow-down {
                    margin: 0 auto;
                    padding: 30px 0;
                    transform: rotate(180deg);
                    width: 30px;
                }
            }
        `}</style>
    </div>