import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

import { setModal } from "../commons/action"

const ModalContainer = props => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.common.modal)
    const { isOpen, type, message, onConfirm } = modal

    const modalInfo = () => {
        switch (type) {
            case "danger":
                return {
                    header: "Failed",
                    color: "#dc3545",
                }

            case "warning":
                return {
                    header: "Warning",
                    color: "#ffc107",
                }

            case "success":
                return {
                    header: "Success",
                    color: "#28a745",
                }

            default:
                return {
                    header: "Notification",
                    color: "#007bff",
                }
        }
    }

    const toggle = () => dispatch(setModal({ isOpen: !isOpen }))

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
            <ModalHeader
                toggle={() => props.setModal({ isOpen: !isOpen })}
                style={{ backgroundColor: modalInfo().color }}
            >
                {modalInfo().header}
            </ModalHeader>

            <ModalBody>{message}</ModalBody>

            <ModalFooter>
                {onConfirm && (
                    <Button
                        color="primary"
                        onClick={() => {
                            onConfirm()
                            toggle()
                        }}
                    >
                        Confirm
                    </Button>
                )}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalContainer