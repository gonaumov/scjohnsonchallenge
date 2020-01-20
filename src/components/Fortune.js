import React from "react";
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Fortune({products, history}) {
    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <header>
                    <img src="./images/toilet-duck.png" alt="Duck"/>
                    <p className="lead">
                        Yay! I can predict your future also.
                        Just type your question here.
                        Don't worry. It remains secret.
                    </p>
                </header>
            </div>
            <div className="container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    history.push('/answer/')
                }}>
                    <div className="form-row align-items-center justify-content-center">
                        <div className="col-10 col-sm-8">
                            <div className='form-group mx-auto text-center'>
                                <label htmlFor="question">
                                    Please type your question
                                </label>
                                <textarea rows="4" id="question" required className='form-control noresize'></textarea>
                            </div>
                        </div>
                    </div>
                    <TransitionGroup appear={true} className="form-row align-items-center justify-content-center">
                        <CSSTransition in={true} timeout={1000} classNames="animated-node">
                            <input className="btn btn-primary" type="submit" value="Give me an answer"
                                   key="request-answer-button"></input>
                        </CSSTransition>
                    </TransitionGroup>
                </form>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(withRouter(Fortune))
