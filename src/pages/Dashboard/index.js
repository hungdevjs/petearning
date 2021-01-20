import React, { useEffect } from "react"
import {
    Row,
    Col,
    Table,
    Button
} from "reactstrap"
import { useSelector, useDispatch } from "react-redux"

import PanelHeader from "components/PanelHeader"
import DashboardCard from "../../components/DashboardCard"
import Logo from "../../components/Logo"
import Pet from "../../components/Pet"
import PetSlider from "../../components/PetSlider"

import goldImg from "../../assets/img/gold.png"
import dollar from "../../assets/img/dollar.png"
import dog from "../../assets/img/dog.png"
import pig from "../../assets/img/pig.png"
import chicken from "../../assets/img/chicken.png"
import duck from "../../assets/img/duck.png"

import { getDashboardInfo, getPets } from "./redux/action"

const images = { dog, pig, chicken, duck }

const Dashboard = () => {
    const dispatch = useDispatch()
    const dashboard = useSelector(state => state.dashboard)
    const { pets, gold, cash, allPets } = dashboard

    useEffect(() => {
        dispatch(getDashboardInfo())
        dispatch(getPets())
    }, [])

    return <>
        <PanelHeader
            content={
                <Logo />
            }
        />
        <div className="content">
            <Row>
                <Col xs={12} md={4}>
                    <DashboardCard title="YOUR PETS">
                        <div className="d-flex justify-content-between">
                            {pets && pets.map(pet => <Pet
                                key={pet._id}
                                type={pet.type}
                                quantity={pet.quantity}
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
                                <Button block color="danger">
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
                                <Button block color="danger">
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
                        <PetSlider pets={allPets} />
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
                                                {pet.profit}{" "}
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
