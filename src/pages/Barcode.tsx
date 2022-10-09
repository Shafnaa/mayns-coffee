import { QRCodeCanvas } from "qrcode.react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatK from "../utilities/formatK";
import storeItems from "../data/Menu.json"
import bg2 from "../media/textured-paper-light.png"

export default function Barcode(){
  const { cartItems } = useShoppingCart()
  var qrCodeText = ""
  cartItems.forEach( (value, index, array) => {
    const testing = storeItems.find(x => x.id === value.id)
    qrCodeText += (testing?.name + " * " + value.quantity + " # ")
  })

  return (
    <main 
      style={{
        backgroundImage: `url("${bg2}")`,
        backgroundRepeat: "repeat"
      }}
    >
      <Container
        style={{
          minHeight: 720,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 16
        }}
      >
        <div
          style={{
            width: "100%",
            height: 480,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <QRCodeCanvas value={qrCodeText} size={240}/>
        </div>
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
              width: "100%",
              height: 72,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}
          >
            <span>
              TOTAL (INCL TAX 10%)
            </span>
            <span>
              {formatK(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0) * 110 / 100
              )}
            </span>
          </div>
          <NavLink 
            to="/"
            style={{
              width: 240,
              height: 72,
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.5rem",
              border: "1px solid black",
              borderRadius: 90,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            CLEAR CART
          </NavLink>
        </div>
      </Container>
    </main>
  )
}