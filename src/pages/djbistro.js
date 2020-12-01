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
                <h2 className="title">{information[0].name}</h2>
                <h5>{information[0].description}</h5>
                <br />
              </Col>
              <Col>
                <img
                  alt="FUCKING HELL NO IMAGE"
                  src={require("assets/images/djbistro.jpg")}
                  width="100%"
                />
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
