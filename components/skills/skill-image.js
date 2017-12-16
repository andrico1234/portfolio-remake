export default (props) => (
    <div>
        <img src={props.src}/>

        <style jsx>{`
            div {
                display: inline-block;
            }

            img {
                height: 40px;
                padding: 5px;
                width: 40px;
            }
        `}</style>
    </div>
)