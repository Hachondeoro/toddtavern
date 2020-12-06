import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { bottleshop } from "assets/information"
import thirstycamellogo from "assets/images/thirstycamellogo.png"

function DjBistro() {
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
        <div className="section text-left landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto">
                <h2 className="title">{bottleshop[0].name}</h2>
                <img src={thirstycamellogo} width="100%" />
                <h5>{bottleshop[0].description}</h5>
                <br />
                <h2 className="title">{bottleshop[1].name}</h2>
                <h5>{bottleshop[1].description}</h5>
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
