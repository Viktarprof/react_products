export const product_req = (callback) => {
    let url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then(res => res.json())
        .then(json => (
            callback(json),
            console.log(json)))
}