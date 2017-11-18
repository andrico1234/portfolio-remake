import NavBar from '../navbar/navbar';

export default () =>
    <div>
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
            header {
                background: #34495d;
                color: white;
            }
        `}</style>
    </div>