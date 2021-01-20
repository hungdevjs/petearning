import React from "react"
import { Row, Col, Button } from "reactstrap"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

import dog from "../assets/img/dog.png"
import pig from "../assets/img/pig.png"
import chicken from "../assets/img/chicken.png"
import duck from "../assets/img/duck.png"
import gold from "../assets/img/gold.png"

const images = { dog, pig, chicken, duck }

export default ({ pets }) => {
    return (
        <div className="slide-container">
            <Slide duration={3000} transitionDuration={400}>
                {pets.map(pet => <div className="each-slide" key={pet._id}>
                    <Row>
                        <Col md={12} className="text-center">
                            <img
                                src={images[pet.type]}
                                width={200}
                                height={200}
                                alt="pet"
                            />
                        </Col>
                        <Col md={12}>
                            <p className="text-center">{pet.description}</p>
                            <p className="text-center font-weight-bold">
                                {pet.price} {" "}
                                <img
                                    src={gold}
                                    alt="gold"
                                />
                            </p>
                        </Col>
                    </Row>
                </div>)}
            </Slide>
            <Row>
                <Col md={12}>
                    <Button block color="primary">
                        Buy now <i className="now-ui-icons shopping_cart-simple ml-1" />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}