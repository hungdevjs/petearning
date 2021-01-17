import React, { useEffect } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"

import { authRedirect } from "../utils/common"

export default () => {
    useEffect(() => {
        authRedirect()
    }, [])

    const onSubmit = e => {
        e.preventDefault()
    }

    return <div className="login-pages">
        <h4 className="login-name">Pet Earning</h4>
        <Form className="login-form" onSubmit={onSubmit}>
            <FormGroup>
                <Input
                    className="login-input"
                    placeholder="Email"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                />
            </FormGroup>
            <Button
                block
                size="sm"
                type="submit"
                style={{ backgroundColor: "royalblue" }}
            >
                Login
            </Button>
        </Form>
    </div>
}