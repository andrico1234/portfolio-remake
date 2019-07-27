import Images from "./images/images";

export default () => (
  <div className="footer-wrapper">
    <footer>
      <h1>Contact.</h1>
      <p>
        If you have any questions or queries about my work, or would like an
        interactive website built, then don't hesitate to drop me an email. You
        can reach out to me on social media via the icons below.
      </p>
      <p>
        I regularly publish blog posts on a range of topics related to web
        development such as Gatsby, Apollo and Graphql.
      </p>
      <div className="button-container">
        <a href="mailto:karoulla.andrico@gmail.com">
          <button>Contact Me</button>
        </a>
        x{" "}
      </div>
      <Images />

      <div className="arrow-container">
        <img src="static/icon-arrow-up.svg" />
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
        max-width: 1300px;
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
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          text-align: center;
          width: 100%;
        }

        button {
          background-color: #e8535b;
          border: 1px solid white;
          border-radius: 1px;
          color: white;
          cursor: pointer;
          height: 45px;
          padding: 12px 0 20px 0;
          text-align: center;
          width: 135px;

          &:hover {
            background-color: #ff7b83;
          }

          &:active {
            background-color: #c33f47;
          }
        }
      }
    `}</style>
  </div>
);
