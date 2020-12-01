import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { information } from "assets/information";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/images/billar-pool.jpg") + ")",
        }}

      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <img
                alt="FUCKING HELL NO IMAGE"
                src={require("assets/images/todd-logo.svg")}
              />
              <h1 className="title">TODD TAVERN</h1>
              <h3 className="description">
                The last traditional pub in town
              </h3>
              <br />
              <Button
                className="btn-round"
                color="neutral"
                href="https://www.facebook.com/ToddTavern/"
                type="button"
                outline
              >
                Facebook
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
