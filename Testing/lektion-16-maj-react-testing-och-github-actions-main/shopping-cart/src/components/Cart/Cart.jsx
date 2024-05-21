function Cart(props) {
    return (
        <section role="cart">
            <a href="#">Cart</a>
            <p role="cartAmount">{ props.amount }</p>
        </section>
    )
}

export default Cart;