import { useSelector } from "react-redux";
import { selectorCartCount } from "../slices/cart";

function Header (){
    const cartCount = useSelector(selectorCartCount);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <div>Welcome to our site</div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <button style={{color:"red"}}>Sign up</button>
                    <button style={{color:"red"}}>Sign in</button>
                    <div style={{ position: "relative" }}>
                        <span style={{ fontSize: "24px" }}>🛒</span>
                        {cartCount > 0 && (
                            <span style={{
                                position: "absolute",
                                top: "-5px",
                                right: "-10px",
                                background: "red",
                                color: "white",
                                borderRadius: "50%",
                                padding: "2px 6px",
                                fontSize: "12px"
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
