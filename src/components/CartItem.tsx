import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/Menu.json"
import formatK from "../utilities/formatK"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          maxWidth: "50%",
          height: 64,
          textAlign: "left",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center"
        }}
      >
        {item.name}
      </div>
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
            >
              {formatK(item.price)}
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                height: "50%"
              }}
            >
              {formatK(item.price)}
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
    </div>
  )
}
