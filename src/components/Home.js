import React from "react"
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { withRouter } from "react-router-dom"

function Home({products, history}) {
    const callToActions = Object.keys(products).map((item, index) => (
        <CSSTransition in={true} timeout={1000} classNames="animated-node" key={'item-list' + index}>
        <button onClick={() => history.push("/products/" + item)} type="button" className="btn btn-primary ml-2 mb-2" key={'item-list-button' + index}>
            {products[item].description}
        </button>
        </CSSTransition>
    ));
    return (
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <header>
                <img src="./images/toilet-duck.png" alt="Duck"/>
                <p className="lead">
                    I am the toiled duck and I can offer you
                    many great things. Would you like to:
                </p>
                <TransitionGroup appear={true}>
                {callToActions}
                    <CSSTransition in={true} timeout={1000} classNames="animated-node" key="item-list-fortune">
                    <button onClick={() => history.push("/fortune/")} type="button" className="btn btn-primary ml-2" key="item-list-button-fortune">
                        I can offer you fortune telling also
                    </button>
                    </CSSTransition>
                </TransitionGroup>
            </header>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(withRouter(Home))
