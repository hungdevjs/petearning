import React, { useState } from "react"
import { Row, Col, Button, Input } from "reactstrap"
import { useDispatch } from "react-redux"

import ViewModal from "./ViewModal"

import { images } from "../utils/constants"

import useModal from "../hooks/useModal"

import { sellPets } from "../pages/Dashboard/redux/action"

export default ({ pet, sellable }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const [isOpen, toggle] = useModal()

    const sell = async () => {
        if (!quantity) {
            alert("Pet quantity must be greater than 0")
            return
        }
        const sellPet = { _id: pet._id, quantity }
        await sellPets({ pet: sellPet })(dispatch)
        toggle()
    }

    const onChangeQuantity = e => {
        try {
            if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= pet.quantity) {
                setQuantity(parseInt(e.target.value))
            }
        } catch {
            setQuantity(0)
        }
    }

    const renderModal = () => {
        return <ViewModal
            isOpen={isOpen}
            toggle={toggle}
            title="Sell pet"
            noFooter
        >
            <Row>
                <Col md={12} className="mb-2">
                    <span className="mr-2 font-weight-bold">RETRIEVE GOLD: {quantity * pet.sellPrice}</span>
                    <img src={images.goldImg} width={20} height={20} alt="gold" />
                </Col>
                <Col md={12}>
                    <Input
                        type="number"
                        value={quantity}
                        onChange={onChangeQuantity}
                    />
                </Col>
                <Col md={12}>
                    <Button block color="danger" onClick={sell}>Exchange</Button>
                </Col>
            </Row>
        </ViewModal>
    }

    return <div className="p-3 text-center">
        {renderModal()}
        <img
            src={images[pet.type]}
            width={60}
            height={60}
            alt="pet"
        />
        {pet.quantity && <div className="text-center font-weight-bold">
            {pet.quantity}
        </div>}

        {sellable && <Row>
            <Col md={12}>
                <Button block size="sm" color="danger" onClick={toggle}>
                    Sell <i className="now-ui-icons arrows-1_share-66" />
                </Button>
            </Col>
        </Row>}
    </div>
}