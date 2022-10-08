import { Button, Card, Col, Container } from "react-bootstrap";
import bg2 from "../media/textured-paper-light.png"
import CasB from "../media/cupandsun-black.svg"
import storeItems from "../data/Menu.json"
import { StoreItem } from "../components/StoreItem";

export default function Menu(){
  const espresso = storeItems.filter(x => x.type === "espresso")
  const snacks = storeItems.filter(s => s.type === "snacks")

  return (
    <main 
      style={{
        backgroundImage: `url("${bg2}")`, 
        minHeight: 862, 
        backgroundRepeat: "repeat"
      }}
    >
      <Container 
        style={{
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-around"
        }}
      >
        <div 
          style={{
            height: 480, 
            width: 360, 
            background: "transparent", 
            fontWeight: "bold", 
            textAlign: "center", 
            paddingTop: "2rem", 
            fontSize: "2rem", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center"
          }}
        >
          <img src={CasB} alt="Mayn's" style={{height: "10rem"}}/>
          <span>MAYN'S</span>
          <span>COFFEE & EATERY</span>
        </div>
        <div 
          style={{
            height: 480, 
            width: 360, 
            background: "transparent", 
            fontWeight: "bold", 
            textAlign: "center", 
            paddingTop: "2rem", 
            fontSize: "1.5rem", 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <div 
            style={{
              width: "100%", 
              fontSize: "2rem", 
              textAlign: "left"
            }}
          >
            ESSPRESSO
          </div>
          {espresso.map(item => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
              key={item.id}
            >
              <StoreItem {...item}/>
            </div>
          ))}
        </div>
        <div 
          style={{
            height: 480, 
            width: 360, 
            background: "transparent", 
            fontWeight: "bold", 
            textAlign: "center", 
            paddingTop: "2rem", 
            fontSize: "1.5rem", 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <div 
            style={{
              width: "100%", 
              fontSize: "2rem", 
              textAlign: "left"
            }}
          >
            SNACKS
          </div>
          {snacks.map(item => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
              key={item.id}
            >
              <StoreItem {...item}/>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}