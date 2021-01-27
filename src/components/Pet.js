import React from "react"
import { Row, Col, Button } from "reactstrap"

import { images } from "../utils/constants"

export default ({ type, quantity, sellable }) => {
    return <div className="p-3 text-center">
        <img
            src={images[type]}
            width={60}
            height={60}
            alt="pet"
        />
        {quantity && <div className="text-center font-weight-bold">
            {quantity}
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