import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import formatK from "../utilities/formatK"

type StoreItemProps = {
  id: number
  name: string
  price: number
  type: string
  [key: string]: any
}

export function StoreItem({ id, name, price, type, imgUrl = ""}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <>
    <div
      style={{
        maxWidth: "50%",
        height: 64,
        textAlign: "left",
        fontWeight: "normal",
        display: "flex",
        alignItems: "center"
      }}
    >{name}</div>
    <div
      style={{
        width: 124,
        height: 64,
        fontSize: "1rem",
        display: "flex",
        fontWeight: "bold",
        flexDirection: "column"
      }}
    >
      {quantity === 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex"
          }}
        >
          <button
        style={{
          background: "transparent",
          height: 32,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 90,
          justifySelf: "center",
          alignSelf: "center",
          fontWeight: "bold"
        }}
        onClick={() => increaseCartQuantity(id)}
      >{formatK(price)}</button>
        </div>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              height: "50%"
            }}
          >
            {formatK(price)}
          </div>
          <div
            style={{
              width: "100%",
              height: "50%"
            }}
          >
            <div
              style={{
                borderRadius: 90,
                border: "1px solid #000000",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <button
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  fontWeight: "bolder",
                  fontSize: "1rem"
                }}
                onClick={() => decreaseCartQuantity(id)}
              >-</button>
              <span>{quantity}</span>
              <button
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  fontWeight: "bolder",
                  fontSize: "1rem"
                }}
                onClick={() => increaseCartQuantity(id)}
              >+</button>
            </div>
          </div>
        </>
      ) }
    </div>
    </>
  )
}
