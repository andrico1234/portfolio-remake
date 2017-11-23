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
            <div className="arrow-down-container">

            </div>
        </header>

        <style jsx>{`
            .header-wrapper {
                background: #34495d;
            }

            header {
                color: white;
                height: 380px;
                margin: 0 auto;
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
            }
        `}</style>
    </div>