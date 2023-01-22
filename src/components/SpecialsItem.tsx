import { useShoppingCart } from "../context/ShoppingCartContext"
import formatK from "../utilities/formatK"

type SpecialItemProps = {
  id: number
  name: string
  price: number
  type: string
  [key: string]: any
}

export default function SpecialsItem({ id, name, price, type, imgurl = "", recipe = "" }: SpecialItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div
      style={{
        width: 360,
        height: 360,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#4978A3",
        fontWeight: "bold"
      }}
    >
      <img 
        src={imgurl} 
        alt={name}
        height={240}
        width={240}
      />
      <span
        style={{
          fontSize: "1.8rem"
        }}
      >
        {name}
      </span>
      <span>
        {recipe}
      </span>
      {quantity === 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <button
            style={{
              background: "transparent",
              height: 32,
              width: 124,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4978A3",
              borderRadius: 90,
              justifySelf: "center",
              alignSelf: "center",
              fontWeight: "bold",
              color: "#4978A3"
            }}
            onClick={() => increaseCartQuantity(id)}
          >
            {formatK(price)}
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              height: "50%",
              justifySelf: "center",
              textAlign: "center"
            }}
          >
            {formatK(price)}
          </div>
          <div
            style={{
              width: 124,
              height: "50%"
            }}
          >
            <div
              style={{
                borderRadius: 90,
                border: "1px solid #4978A3",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#4978A3"
              }}
            >
              <button
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                  color: "#4978A3"
                }}
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span>
                {quantity}
              </span>
              <button
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                  color: "#4978A3"
                }}
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
          </div>
        </>
      ) }
    </div>
  )
}