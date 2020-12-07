// styles
import "assets/css/bootstrap.min.css"
import "assets/scss/paper-kit.scss"
import "assets/demo/demo.css"
import "assets/demo/react-demo.css"

import React from "react"
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js"
import LandingPageHeader from "components/Headers/LandingPageHeader.js"
import FooterAboutUs from "components/Footers/FooterAboutUs.js"

function IndexPage() {
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <FooterAboutUs />
    </>
  )
}
export default IndexPage
