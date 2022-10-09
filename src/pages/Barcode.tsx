import { QRCodeCanvas } from "qrcode.react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bg2 from "../media/textured-paper-light.png"

export default function Barcode(){
  const qrCodeText = "Cappuccino * 1 # Carramel Latte * 1 # Hazelnut Latte * 1 # French Fries * 1 # Beef Burger * 1"

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
              {}
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