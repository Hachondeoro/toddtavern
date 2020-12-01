import React from "react"

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap"

function SectionCards(props) {
  return (
    <>
      <Card className="card-blog">
        <div className="card-image">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img alt="..." className="img" src={require(`${props.image}`)} />
          </a>
        </div>
        <CardBody className="text-center">
          <CardTitle tag="h4">{props.name}</CardTitle>
          <div className="card-description">{props.description}</div>
          <CardFooter>
            <Button
              className="btn-round"
              color="danger"
              href={props.link}
              onClick={e => e.preventDefault()}
            >
              Book Now
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionCards
