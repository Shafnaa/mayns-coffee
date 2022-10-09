import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/Menu.json"
import formatK from "../utilities/formatK"

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
            <div
              style={{
                width: "100%",
                height: "50%",
                textAlign: "center"
              }}
            >
              {formatK(item.price * quantity)}
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
                  border: "1px solid #ffffff",
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
                    fontSize: "1rem",
                    color: "white"
                  }}
                  onClick={() => decreaseCartQuantity(id)}
                >-</button>
                <span>{quantity}</span>
                <button
                  style={{
                    borderStyle: "none",
                    background: "transparent",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                    color: "white"
                  }}
                  onClick={() => increaseCartQuantity(id)}
                >+</button>
              </div>
            </div>
      </div>
    </div>
  )
}
