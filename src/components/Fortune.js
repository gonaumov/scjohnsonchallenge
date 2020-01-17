import React from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

function Fortune({products, history}) {
    return (
        <>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <header>
                <img src="/images/toilet-duck.png" alt="Duck"/>
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
                <div className='form-group'>
                    <label htmlFor="question">
                        Please type your question
                    </label>
                    <textarea id="question" required className='form-control'></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="Give me answer"></input>
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
