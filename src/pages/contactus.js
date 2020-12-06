import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"
import { contactus } from "assets/information"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

// core components
const position = [51.505, -0.09]

function DjBistro() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("landing-page")
    // window.scrollTo(0, 0)
    // document.body.scrollTop = 0
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
                <h2 className="title">{contactus[0].name}</h2>
                <h5>
                  <strong>Hotel: </strong>
                  {contactus[0].hotel}
                  <br />
                  <strong>Email: </strong>
                  {contactus[0].email}
                  <br />
                  <strong>Phone: </strong>
                  {contactus[0].phone}
                  <br />
                  <strong>Fax: </strong>
                  {contactus[0].fax}
                  <br />
                  <strong>Address: </strong>
                  {contactus[0].address}
                  <br />
                </h5>
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
      <div>
        <MapContainer
          center={[-23.7034237, 133.8809373]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "600px" }}
        >
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
          <Marker position={[-23.7034237, 133.8809373]}>
            <Popup>
              Todd Tavern <br /> 1 Todd Street Alice Springs
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <FooterAboutUs />
    </>
  )
}

export default DjBistro
