import React, {Component} from 'react';

import About from '../about/about';
import modalStyles from '../../services/modal-styles';
import NavBar from '../navbar/navbar';
import ReactModal from 'react-modal';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({showModal: false});
    }

    openModal() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div className="header-wrapper">
                <header>
                    <NavBar onClick={this.openModal}/>
                    <h1>
                        Hello.
                    </h1>
                    <p>
                        A JavaScript developer based in London, my work is an amalgamation of sleek and modern design with fluid interactivity.
                    </p>
                    <img className="arrow-down" src="static/icon-arrow-down.svg"/>
                </header>

                <ReactModal
                    ariaHideApp={false}
                    style={modalStyles}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.showModal}
                    contentLabel="Project Modal"> <About /> </ReactModal>

                <style jsx>{`
                    .header-wrapper {
                        background: #34495d;
                        background-image: url("static/laptop-image-desktop-trans.png");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        height: 320px;

                        @media (min-width: 768px) {
                            height: 350px;
                        }
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
                            min-height: 84px;

                            @media (min-width: 768px) {
                                line-height: 1.8;
                                min-height: 0;
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
    }
}

export default Header;