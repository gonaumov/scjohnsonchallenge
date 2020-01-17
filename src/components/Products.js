import React from "react";
import {connect} from 'react-redux'

function Products({products, match}) {
    const {params: {productName: productsGroupName}} = match
    const productsList = products[productsGroupName] ? products[productsGroupName].products.map((item, index) => {
        return (<div key={"products-list" + index} className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{item.name}</h4>
            </div>
            <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{item.description}</li>
                    <li><img src={item.image} height="88px" alt=""/></li>
                </ul>
            </div>
        </div>)
    }) : [];

    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix">
                <header>
                    <img src="/images/toilet-duck.png" alt="Duck"/>
                    <p className="lead">
                        Great choice.
                        I can offer you these perfect products:
                    </p>
                </header>
            </div>
            <div className="container">
            <div className="col-3 card-deck mb-3 text-center">
                {productsList}
            </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)
