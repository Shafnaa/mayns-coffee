import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bgFoto from "../media/bgFoto.jpg"
import CasB from "../media/cupandsun-black.svg"
import menu from "../media/iconmonstr-book-15.svg"

export default function Home(){
    return (
      <main 
        style={{
          backgroundImage: `url("${bgFoto}")`, 
          minHeight: 862, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <Container 
          style={{
            minHeight: 862,
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between"
          }}
        >
          <div 
            style={{
              background: "transparent", 
              fontWeight: "bold", 
              textAlign: "center", 
              paddingTop: "2rem", 
              fontSize: "2rem", 
              display: "flex", 
              flexDirection: "column"
            }}
          >
            <img 
              src={CasB} 
              alt="Mayn's" 
              style={{
                height: "10rem"
              }}
            />
            <span>
              MAYN'S
            </span>
            <span>
              COFFEE & EATERY
            </span>
          </div>
          <div 
            style={{
              display: "flex", 
              flexDirection: "column", 
              background: "transparent", 
              height: 124
            }}
          >
            <NavLink 
              to="/Menu" 
              style={{
                width: "12rem", 
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent", 
                color: "black", 
                fontWeight: "bold", 
                fontSize: "1.5rem", 
                border: "1px solid #000000", 
                margin: "0 auto", 
                borderRadius: 90,
                textDecoration: "none"
              }}
            >
              <span 
                style={{
                  marginRight: "1rem"
                }}
              >
                <img 
                  src={menu} 
                  alt="menu"
                />
              </span>
              <span>
                MENU
              </span>
            </NavLink>
          </div>
        </Container>
      </main>
    )
}