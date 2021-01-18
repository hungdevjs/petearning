import React from "react"
import { useSelector } from "react-redux"

const loadingStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 9999
}

const Loading = () => {
    const isLoading = useSelector(state => state.common.isLoading)

    return isLoading
        ? <div style={loadingStyle}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        : null
}

export default Loading