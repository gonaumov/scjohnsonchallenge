import React from "react";
import {connect} from 'react-redux'
import answer from "../selectors/answer"
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Answer({answer}) {
    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix">
                <header>
                    <img src="./images/toilet-duck.png" alt="Duck"/>
                    <p className="lead">
                        Great!
                        You are lucky.
                        This is your answer:
                    </p>
                </header>
            </div>
            <div className="container">
                <TransitionGroup appear={true} className="row align-items-center justify-content-center">
                    <CSSTransition in={true} timeout={1000} classNames="animated-node">
                        <div className="col-3 card-deck mb-3 d-flex" key="answer-holder">
                            <div key="products-list-answer" className="card mb-4 box-shadow">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">{answer.name}</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>{answer.answer}</li>
                                        <li><img src={"." + answer.image} height="88px" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        answer: answer(state)
    }
}

export default connect(mapStateToProps)(Answer)
