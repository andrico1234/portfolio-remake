export default (props) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li><a href="https://github.com/andrico1234">Work</a></li>
                <li onClick={props.onClick}>About</li>
                <li><a href="mailto:andrico1234@yahoo.co.uk?Subject=Hello">Contact</a></li>
            </ul>

            <style jsx>{`
        ul {
            margin: 0 auto;
            text-align: center;
            padding: 10px 0;
            width: 100%;

            @media (min-width: 768px) {
                text-align: right;
            }

            li {
                display: inline-block;
                margin: 5px 15px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
        `}</style>
        </nav>
    )
}