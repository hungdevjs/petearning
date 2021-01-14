import React from "react"
import { Row, Col } from "reactstrap"

import dog from "../assets/img/dog.png"
import pig from "../assets/img/pig.png"
import chicken from "../assets/img/chicken.png"
import duck from "../assets/img/duck.png"

const images = { dog, pig, chicken, duck }

export default ({ type, count }) => {
    return <div className="p-3 text-center">
        <img
            src={images[type]}
            width={60}
            height={60}
        />
        {count && <div className="text-center font-weight-bold">
            {count}
        </div>}
    </div>
}