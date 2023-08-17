import react from "react";
import Login from "./Login";
const AuthLayout = ({children, leftPanel}) => {
    return (
        <div className="container-login">
            <div className="auth-left-panel w-1/2">
                {leftPanel}
            </div>
            <div className="auth-right-panel w-1/2">
                {children}
            </div>    
        </div>
    )
}

export default AuthLayout;