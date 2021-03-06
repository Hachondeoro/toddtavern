import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { accommodation } from "assets/information"
import SectionCards from "components/cards.js"
import room1 from "assets/images/accomodation-room1.png"
import room2 from "assets/images/accomodation-room2.png"

function Accomodation() {
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
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">{accommodation[0].name}</h2>
                <h5>{accommodation[0].description}</h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6" sm="12">
                <SectionCards
                  name={accommodation[0].rooms[0].name}
                  description={accommodation[0].rooms[0].description}
                  image={room1}
                  link={accommodation[0].rooms[0].link}
                />
              </Col>
              <Col md="6" sm="12">
                <SectionCards
                  name={accommodation[0].rooms[1].name}
                  description={accommodation[0].rooms[1].description}
                  image={room2}
                  link={accommodation[0].rooms[1].link}
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

export default Accomodation
