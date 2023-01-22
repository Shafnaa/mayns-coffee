import { Container } from "react-bootstrap";
import SpecialsItem from "../components/SpecialsItem";
import storeItems from "../data/Menu.json"

export default function Specials(){
  const specials = storeItems.filter(i => i.type === "specials")

  return (
    <main 
      style={{
        backgroundColor: "#F2E8DE"
      }}
    >
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: 720
        }}
      >
        {specials.map(item => (
          <SpecialsItem {...item}/>
        ))
        }
      </Container>
    </main>
  )
}