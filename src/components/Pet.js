import React from "react"
import { Row, Col, Button } from "reactstrap"

import dog from "../assets/img/dog.png"
import pig from "../assets/img/pig.png"
import chicken from "../assets/img/chicken.png"
import duck from "../assets/img/duck.png"

const images = { dog, pig, chicken, duck }

export default ({ type, count, sellable }) => {
    return <div className="p-3 text-center">
        <img
            src={images[type]}
            width={60}
            height={60}
        />
        {count && <div className="text-center font-weight-bold">
            {count}
        </div>}

        {sellable && <Row>
            <Col md={12}>
                <Button block size="sm" color="danger">
                    Sell <i className="now-ui-icons arrows-1_share-66" />
                </Button>
            </Col>
        </Row>}
    </div>
}