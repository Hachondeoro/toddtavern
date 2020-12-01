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

function MaximBar() {
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
                <h2 className="title">{information[1].name}</h2>
                <h5>{information[1].description}</h5>
                <br />
              </Col>
              <Col>
                <img
                  src={require("assets/images/maximbar1.jpg")}
                  width="100%"
                />
                <img
                  src={require("assets/images/maximbar2.jpg")}
                  width="100%"
                />
                <img
                  src={require("assets/images/maximbar3.jpg")}
                  width="100%"
                />
                <img
                  src={require("assets/images/maximbar4.jpg")}
                  width="100%"
                />
                <img
                  src={require("assets/images/maximbar5.jpg")}
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

export default MaximBar
