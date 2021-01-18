import React, { useState, useEffect } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import { useSelector, useDispatch } from "react-redux"

import { authRedirect } from "../utils/common"
import { userLogin } from "../commons/action"

export default () => {
    const user = useSelector(state => state.common.user)
    const dispatch = useDispatch()

    useEffect(() => {
        authRedirect()
    }, [user])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async e => {
        e.preventDefault()
        if (!email || !password || !email.trim() || !password.trim()) return

        dispatch(userLogin({ email, password }))
    }

    return <div className="login-pages">
        <h4 className="login-name">Pet Earning</h4>
        <Form className="login-form" onSubmit={onSubmit}>
            <FormGroup>
                <Input
                    className="login-input"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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