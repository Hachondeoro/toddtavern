import React from "react"

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterWhite from "components/Footers/FooterWhite.js"
import { information } from "assets/information"
import SectionCards from "components/cards.js"

const baseUrl = "assets/images/"

function DjBistro() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("landing-page")
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove("landing-page")
    }
  })
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">{information[2].name}</h2>
                <h5>{information[2].description}</h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6" sm="12">
                <SectionCards
                  name={information[2].rooms[0].name}
                  description={information[2].rooms[0].description}
                  //   image={`${baseUrl}accomodation-room1.png`}
                  image={baseUrl + information[2].rooms[0].image}
                  link={information[2].rooms[0].link}
                />
              </Col>

              <Col md="6" sm="12">
                <SectionCards />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </>
  )
}

export default DjBistro
