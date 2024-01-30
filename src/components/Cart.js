import '../styles/Cart.css'


function Cart(){
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice} CAD</li>
                <li>Lierre : {ivyPrice} CAD</li>
                <li>Fleurs : {flowerPrice} CAD</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice} CAD
        </div>
    )
}

export default Cart