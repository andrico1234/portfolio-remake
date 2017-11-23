export default () => <nav>
    <ul>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
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
                padding: 5px 15px;
            }
        }
        `}</style>
</nav>