import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Card, CardBody, Button } from "reactstrap"
import _ from "lodash"

import ViewModal from "./ViewModal"

import { images } from "../utils/constants"

import { buyPets } from "../pages/Dashboard/redux/action"

const BuyPetModal = ({ isOpen, toggle }) => {
    const { gold, allPets } = useSelector(state => state.dashboard)
    const dispatch = useDispatch()

    const [petToBuy, setPetToBuy] = useState([])
    useEffect(() => {
        setPetToBuy(allPets.map(pet => ({ ...pet, quantity: 0, totalPrice: 0 })))
    }, [allPets])

    const change = (petId, count) => {
        const clonePetToBuy = [...petToBuy]
        const pet = clonePetToBuy.find(pet => pet._id === petId)

        const newQuantity = pet.quantity + count
        if (newQuantity > 0) {
            pet.quantity = newQuantity
            pet.totalPrice = pet.price * newQuantity

            const totalBill = _.sumBy(petToBuy, "totalPrice") + count * pet.price
            if (totalBill > gold) {
                alert("Not enough gold")
                return
            }
        } else {
            pet.quantity = 0
            pet.totalPrice = 0
        }

        setPetToBuy(clonePetToBuy)
    }

    const buy = async () => {
        const pets = petToBuy
            .filter(pet => pet.quantity > 0)
            .map(pet => ({ _id: pet._id, quantity: pet.quantity }))

        await buyPets({ pets })(dispatch)
        toggle()
        setPetToBuy(allPets.map(pet => ({ ...pet, quantity: 0, totalPrice: 0 })))
    }

    return <ViewModal
        isOpen={isOpen}
        toggle={toggle}
        title="Buy pets"
        noFooter
    >
        <Row className="mb-2">
            <Col md={6}>
                <span className="font-weight-bold mr-2">Your gold: {gold}</span>
                <img src={images.goldImg} width={30} height={30} />
            </Col>
            <Col md={6} className="text-right">
                <span className="font-weight-bold mr-2">Total bill: {_.sumBy(petToBuy, "totalPrice")}</span>
                <img src={images.goldImg} width={30} height={30} />
            </Col>
        </Row>
        <Row className="mb-2">
            {petToBuy.map(pet => <Col md={3}>
                <Card key={pet._id}>
                    <CardBody>
                        <p className="font-weight-bold text-center">{pet.name}</p>
                        <p>{pet.description}</p>
                        <img src={images[pet.type]} width={100} alt={pet.type} />
                        <p className="text-center">
                            <span className="font-weight-bold mr-2">{pet.price}</span>
                            <img src={images.goldImg} width={15} height={15} />
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="fas fa-minus-circle cursor-pointer hover-opacity" onClick={() => change(pet._id, -1)} />
                            <span className="font-weight-bold mx-2">{pet.quantity}</span>
                            <i className="fas fa-plus-circle cursor-pointer hover-opacity" onClick={() => change(pet._id, 1)} />
                        </div>
                    </CardBody>
                </Card>
            </Col>)}
        </Row>
        <Row>
            <Col md={12}>
                <Button color="primary" block onClick={buy}>Buy</Button>
            </Col>
        </Row>
    </ViewModal>
}

export default BuyPetModal