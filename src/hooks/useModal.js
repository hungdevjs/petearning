import { useState } from "react"

export default () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!isOpen)

    return [isOpen, toggle]
}