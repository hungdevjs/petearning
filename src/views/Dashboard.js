import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap"

import PanelHeader from "components/PanelHeader/PanelHeader.js"
import DashboardCard from "../components/DashboardCard"
import Logo from "../components/Logo"
import Pet from "../components/Pet"
import PetSlider from "../components/PetSlider"

import gold from "../assets/img/gold.png"
import dollar from "../assets/img/dollar.png"
import dog from "../assets/img/dog.png"
import pig from "../assets/img/pig.png"
import chicken from "../assets/img/chicken.png"
import duck from "../assets/img/duck.png"

const images = { dog, pig, chicken, duck }

const petTestData = [
  { type: "dog", count: 2, profit: 460 },
  { type: "chicken", count: 3, profit: 120 },
  { type: "duck", count: 2, profit: 324 },
  { type: "pig", count: 1, profit: 73 }
]

const goldTestData = 500

const cashTestData = 1.12

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <PanelHeader
          // size="lg"
          content={
            <Logo />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <DashboardCard title="YOUR PETS">
                <div className="d-flex justify-content-between">
                  {petTestData.map(pet => <Pet
                    key={pet.type}
                    type={pet.type}
                    count={pet.count}
                    sellable
                  />)}
                </div>
              </DashboardCard>
            </Col>

            <Col xs={12} md={4}>
              <DashboardCard title="YOUR GOLD">
                <Row>
                  <Col md={12} className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold mr-2" style={{ fontSize: 18 }}>{goldTestData}</span>
                    <img src={gold} width={40} height={40} />
                  </Col>
                  <Col md={12}>
                    <Button block color="warning">
                      INVEST <i className="now-ui-icons shopping_credit-card ml-1" />
                    </Button>
                    <Button block color="danger">
                      EXCHANGE <i className="now-ui-icons business_money-coins ml-1" />
                    </Button>
                  </Col>
                </Row>
              </DashboardCard>
            </Col>

            <Col xs={12} md={4}>
              <DashboardCard title="YOUR CASH">
                <Row>
                  <Col md={12} className="mb-3 d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold mr-2" style={{ fontSize: 18 }}>{cashTestData}</span>
                    <img src={dollar} width={40} height={40} />
                  </Col>
                  <Col md={12}>
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
                <PetSlider />
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
                        {petTestData.map(pet => <tr key={pet.type}>
                          <td>
                            <img
                              src={images[pet.type]}
                              width={50}
                              height={50}
                            />
                          </td>
                          <td className="text-center">{pet.count}</td>
                          <td className="text-right">
                            {pet.profit}{" "}
                            <img src={gold} width={40} height={40} />
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
    );
  }
}

export default Dashboard;
