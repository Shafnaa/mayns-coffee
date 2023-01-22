import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartLogo from "../media/iconmonstr-shopping-cart-3.svg"

export default function CartButton(){
  const { 
    openCart, 
    cartQuantity 
  } = useShoppingCart()
  
  return (
    <>
      { cartQuantity === 0 ? null : (
        <Button
          style={{
            width: "3rem", 
            height: "3rem", 
            position: "fixed", 
            bottom: "2rem", 
            right: "2rem"
          }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <img src={CartLogo} alt="cart" />
          <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{
              color: "white", 
              width: "1.5rem", 
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)"
            }}
          >
            {cartQuantity}
          </div>  
        </Button>
      )}
    </>
  )
}