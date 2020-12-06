import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { maximbar } from "assets/information"

function MaximBar() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("landing-page")
    return function cleanup() {
      document.body.classList.remove("landing-page")
    }
  })
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper" id="intro">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto">
                <h2 className="title">{maximbar[0].name}</h2>
                <h5>{maximbar[0].description}</h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <img src={require("assets/images/maximbar1.jpg")} />
                <img src={require("assets/images/maximbar2.jpg")} />
                <img src={require("assets/images/maximbar3.jpg")} />
              </Col>
              <Col md="4">
                <img src={require("assets/images/maximbar4.jpg")} />
                <img src={require("assets/images/maximbar5.jpg")} />
                <img src={require("assets/images/maximbar6.jpg")} />
              </Col>
              <Col md="4">
                <img src={require("assets/images/maximbar7.jpg")} />
                <img src={require("assets/images/maximbar8.jpg")} />
                <img src={require("assets/images/maximbar9.jpg")} />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  )
}

export default MaximBar
