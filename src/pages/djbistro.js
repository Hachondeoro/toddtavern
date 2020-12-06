import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { djbistro } from "assets/information"

function DjBistro() {
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper" id="intro">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">{djbistro[0].name}</h2>
                <h5>{djbistro[0].description}</h5>
                <br />
              </Col>
              <Col className="m-auto" md="7">
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
      <FooterAboutUs />
    </>
  )
}

export default DjBistro
