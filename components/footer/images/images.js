export default () => (
    <div className="images">
        <a href="https://www.linkedin.com/in/andrico-karoulla"><img src="static/icon-linkedin.svg" alt=""/></a>
        <a href="https://github.com/andrico1234"><img src="static/icon-github.svg" alt=""/></a>
        <a href="mailto:andrico1234@yahoo.co.uk?Subject=Enquiry" target="_top"><img className="mail"
                                                                                    src="static/icon-mail.svg" alt=""/></a>
        <a href="https://twitter.com/andricokaroulla"><img src="static/icon-twitter2.svg" alt=""/></a>

        <style jsx>{`
            .images {
                margin: 0 auto;
                text-align: center;
                width: 60%;

                img {
                     padding: 5px 10px;
                     width: 30px;
                }

                .mail {
                    padding-bottom: 6px;
                }
            }
        `}</style>
    </div>
);