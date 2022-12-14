import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import storeItems from "../data/Menu.json"
import CasW from "../media/cupandsun-white.svg"
import bg1 from "../media/textured-paper-dark.png"
import formatK from "../utilities/formatK"
import { useNavigate } from "react-router-dom"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart()
  const navigate = useNavigate() 

  return (
    <Offcanvas 
      show={isOpen} 
      onHide={closeCart} 
      placement="end"
      style={{
        backgroundImage: `url("${bg1}")`, 
        backgroundRepeat: "repeat",
        color: "white"
      }}  
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img 
            src={CasW} 
            alt="Kopi Sabin" 
            style={{height: 48}}
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div
          style={{
            height: 144,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div 
            style={{
              height: 72,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            className="fw-bold fs-5"
          >
            <span>Total</span>
            <span>
              {formatK(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </span>
          </div>
          {cartQuantity !== 0 ? (
            <Button
              onClick={() => {
                navigate("/Barcode")
                closeCart()
              }}
              style={{
                width: 240,
                height: 72,
                borderRadius: 90,
                border: "1px solid #ffffff",
                background: "transparent",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              GENERATE QR
            </Button>
          ) : null }
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
