import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h2>Cat: {cart.length}</h2>
            <div className="cart-container">
                {cart.map(bottle => <img src={bottle.img}></img>)}
            </div>
            
        </div>
    );
};

export default Cart;