const answer = (state) => {
    const products = Object.keys(state.products).reduce((acc, item) => {
        acc = acc.concat(state.products[item].products)
        return acc
    }, [])
    return products
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value).slice(0, 1).shift()
}

export default answer