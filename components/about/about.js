import Button from '../button/button';
import { devIcons } from '../../static/data.json';
import SkillItems from '../skills/skill-items';

export default () => (
    <div className="aboutModal-container">
        <h2>About</h2>
        <img src="static/profile-picture.jpg" />
        <h3>London Based Full-Stack Web Developer</h3>
        <p className="aboutMe-one">Full-Stack Web Developer currently working in the e-gaming industry. Andrico's projects are optimised for both mobile and tablet incorporating Progressive Web App principles; responsive design, cross-browser support and app-like functionality. These projects use cutting-edge technologies such as ES6+, React16 and Next.js. Andrico also has commercial experience using React, AngularJs, Node and C#. </p>
        <p className="aboutMe-two">His interests include listening to and playing music, on both guitar and accordion. Andrico also regularly attends courses and classes relating to all aspects of Web Development and is planning on giving talks in 2018. You can get in touch through the social media icons below for any freelance work or other enquiries.</p>
        <a href="mailto:andrico1234@yahoo.co.uk?Subject=Hello"> <Button text="Contact Me" /> </a>
        <div className='skill-item-one'>
            <SkillItems name="Proficient with" icons={devIcons.proficient} />
        </div>
        <div className="skill-item-two">
            <SkillItems name="Familiar with" icons={devIcons.familiar} />
        </div>

        <style jsx>{`
            .aboutModal-container {
                display: grid;
                grid-template-columns: 100%;

                h2 {
                    color: #e8535b;
                    font-size: 1.2em;
                    margin: 10px auto;
                    width: 90%;
                }

                h3 {
                    color: #4d4e4f;
                    font-size: 1em;
                    margin: 0;
                    padding: 10px;
                    text-align: center;
                }

                img {
                    border: 1px solid #34495d;
                    border-radius: 2px;
                    margin: 0 auto;
                    max-width: 400px;
                    width: 90%;
                }

                p {
                    color: #4d4e4f;
                    font-size: 0.8em;
                    letter-spacing: 0;
                    line-height: 1.1;
                    margin: 0 auto;
                    padding-left: 5px;
                    padding-right: 5px;
                    padding-top: 15px;
                }

                .aboutMe-one {
                    padding-bottom: 15px;
                }

                .aboutMe-two {
                    display: none;
                    padding-bottom: 15px;
                }

                a {
                    margin-left: 5px;
                    width: 0;
                }

                .skill-item-one, .skill-item-two {
                    display: none;
                }

                @media (min-width: 720px) {
                    grid-template-columns: 50% 50%;
                    max-width: inherit;

                    h2 {
                        grid-column-end: 3;
                        grid-column-start: 1;
                        width: 100%;
                    }

                    h3 {
                        grid-row-end: 3;
                        grid-row-start: 2;
                        padding-left: 0;
                        padding-top: 0;
                        text-align: left;
                        width: 100%;
                    }

                    img {
                        grid-row-end: 6;
                        grid-row-start: 2;
                        margin: inherit;
                    }

                    p {
                        padding-left: 0;
                        padding-right: 0;
                    }

                    a {
                        grid-row-end: 7;
                        grid-row-start: 6;
                        margin-left: 0;
                        margin-top: 15px;
                    }

                    .aboutMe-one {
                        padding-bottom: inherit;
                    }

                    .aboutMe-two {
                        display: block;
                    }

                    .skill-item-one, .skill-item-two {
                        display: block;
                    }
                }
            }
        `}</style>
    </div>
)