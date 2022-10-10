import { Container } from "react-bootstrap";
import bg1 from "../media/textured-paper-dark.png"

export default function Foot(){
  return (
    <footer
      style={{
        backgroundImage: `url("${bg1}")`,
        minHeight: 180,
        width: "100%"
      }}
    >
      <Container></Container>
    </footer>
  )
}