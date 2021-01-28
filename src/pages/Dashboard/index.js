import React, { useState, useEffect } from "react"
import {
    Row,
    Col,
    Table,
    Button,
    Input
} from "reactstrap"
import { useSelector, useDispatch } from "react-redux"

import useModal from "../../hooks/useModal"

import ViewModal from "../../components/ViewModal"
import PanelHeader from "components/PanelHeader"
import DashboardCard from "../../components/DashboardCard"
import Logo from "../../components/Logo"
import Pet from "../../components/Pet"
import PetSlider from "../../components/PetSlider"
import BuyPetModal from "../../components/BuyPetModal"

import { images } from "../../utils/constants"

import { getDashboardInfo, getPets, exchangeGoldCash } from "./redux/action"

const { goldImg, dollar } = images

const Dashboard = () => {
    const dispatch = useDispatch()
    const dashboard = useSelector(state => state.dashboard)
    const { pets, gold, cash, allPets } = dashboard

    useEffect(() => {
        dispatch(getDashboardInfo())
        dispatch(getPets())
    }, [])

    const [isOpen, toggle] = useModal()
    const [option, setOption] = useState("gold")
    const [quantity, setQuantity] = useState(0)

    const exchange = async () => {
        await exchangeGoldCash({ option, quantity })(dispatch)
        toggle()
        setQuantity()
    }

    const renderModal = () => {
        return <ViewModal
            isOpen={isOpen}
            toggle={toggle}
            title="Exchange"
            noFooter
        >
            <Row>
                <Col md={12}>
                    <div className="w-100 d-flex justify-content-between align-items-center mb-2">
                        <img src={option === "gold" ? goldImg : dollar} width={50} height={50} alt="gold" />
                        <i
                            className="fas fa-exchange-alt cursor-pointer"
                            style={{ fontSize: 30 }}
                            onClick={() => setOption(option === "gold" ? "cash" : "gold")}
                        />
                        <img src={option === "gold" ? dollar : goldImg} width={50} height={50} alt="cash" />
                    </div>
                </Col>
                <Col md={12}>
                    <Row>
                        <Col md={10} className="d-flex align-items-center">
                            <Input
                                type="number"
                                className="text-center p-2"
                                value={quantity || ""}
                                onChange={e => setQuantity(e.target.value)}
                            />
                        </Col>
                        <Col md={2}>
                            <img src={option === "gold" ? goldImg : dollar} width={50} height={50} alt="gold" />
                        </Col>
                    </Row>
                </Col>
                <Col md={12}>
                    <Button block color="danger" onClick={exchange}>Exchange</Button>
                </Col>
            </Row>
        </ViewModal>
    }

    const [isOpenBuyPet, toggleOpenBuyPet] = useModal()

    return <>
        {renderModal()}
        <BuyPetModal
            isOpen={isOpenBuyPet}
            toggle={toggleOpenBuyPet}
        />
        <PanelHeader content={<Logo />} />
        <div className="content">
            <Row>
                <Col xs={12} md={4}>
                    <DashboardCard title="YOUR PETS">
                        <div className="d-flex">
                            {pets && pets.map(pet => <Pet
                                key={pet._id}
                                pet={pet}
                                sellable
                            />)}
                        </div>
                    </DashboardCard>
                </Col>

                <Col xs={12} md={4}>
                    <DashboardCard title="YOUR GOLD">
                        <Row>
                            <Col md={12} className="d-flex align-items-center justify-content-center">
                                <span className="font-weight-bold mr-2" style={{ fontSize: 18 }}>{gold}</span>
                                <img src={goldImg} width={40} height={40} alt="gold" />
                            </Col>
                            <Col md={12}>
                                <Button block color="danger" onClick={() => {
                                    setOption("gold")
                                    toggle()
                                }}>
                                    EXCHANGE <i className="now-ui-icons business_money-coins ml-1" />
                                </Button>
                                <Button block color="warning">
                                    INVEST <i className="now-ui-icons shopping_credit-card ml-1" />
                                </Button>
                            </Col>
                        </Row>
                    </DashboardCard>
                </Col>

                <Col xs={12} md={4}>
                    <DashboardCard title="YOUR CASH">
                        <Row>
                            <Col md={12} className="d-flex align-items-center justify-content-center">
                                <span className="font-weight-bold mr-2" style={{ fontSize: 18 }}>{cash}</span>
                                <img src={dollar} width={40} height={40} alt="dollar" />
                            </Col>
                            <Col md={12}>
                                <Button block color="danger" onClick={() => {
                                    setOption("cash")
                                    toggle()
                                }}>
                                    EXCHANGE <i className="now-ui-icons business_money-coins ml-1" />
                                </Button>
                                <Button block color="success">
                                    WITHDRAW <i className="now-ui-icons education_paper ml-1" />
                                </Button>
                            </Col>
                        </Row>
                    </DashboardCard>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <DashboardCard title="PET SHOP">
                        <PetSlider
                            pets={allPets}
                            onClick={toggleOpenBuyPet}
                        />
                    </DashboardCard>
                </Col>
                <Col xs={12} md={6}>
                    <DashboardCard title="PROFIT">
                        <Row>
                            <Col md={12}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Pet</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-right">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pets.map(pet => <tr key={pet.type}>
                                            <td>
                                                <img
                                                    src={images[pet.type]}
                                                    width={50}
                                                    height={50}
                                                    alt="pet"
                                                />
                                            </td>
                                            <td className="text-center">{pet.quantity}</td>
                                            <td className="text-right">
                                                {pet.profit.toFixed(2)}{" "}
                                                <img src={goldImg} width={40} height={40} alt="gold" />
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </Table>
                            </Col>

                            <Col md={12}>
                                <Button block color="warning">
                                    Collect all <i className="now-ui-icons arrows-1_cloud-download-93 ml-1" />
                                </Button>
                            </Col>
                        </Row>
                    </DashboardCard>
                </Col>
            </Row>
        </div>
    </>
}
export default Dashboard;
