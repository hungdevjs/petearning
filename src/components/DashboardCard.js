import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

export default ({ title, children }) => <Card>
    <CardHeader>
        <CardTitle tag="h4" className="text-center">{title}</CardTitle>
    </CardHeader>
    <CardBody>
        {children}
    </CardBody>
</Card>