import React from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

function Home({products, history}) {
    const callToActions = Object.keys(products).map((item, index) => (
        <button onClick={() => history.push("/products/" + item)} type="button" key={'item-list' + index} className="btn btn-primary">
            {products[item].description}
        </button>
    ));
    return (
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <header>
                <img src="/images/toilet-duck.png" alt="Duck"/>
                <p className="lead">
                    I am the toiled duck and I can offer you
                    many great things. Would you like to:
                </p>
                {callToActions}
                <button onClick={() => history.push("/fortune/")} type="button" className="btn btn-primary ml-2">
                   I can offer you fortune telling also
                </button>
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
