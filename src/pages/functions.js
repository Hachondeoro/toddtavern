import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { functions } from "assets/information"
import functionroom from "assets/images/function-room.png"

function DjBistro() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open")
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
        <div className="section text-left landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">{functions[0].name}</h2>
                <h5>{functions[0].description}</h5>
                <br />
                <h2 className="title">{functions[1].name}</h2>
                <h5>{functions[1].description}</h5>
              </Col>
              <Col className="ml-auto mr-auto mt-auto mb-auto" md="6">
                <img src={functionroom} alt="Functions" />
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
