import React , {useEffect , useState , useRef} from "react"
import "../css/easyframer.css"

const Dropdown = () => {
    return (
        <>
            <div className="framer">
                <div className="frame">
                    <div className="fr-4">
                        <section className="has-dropdown">
                            <a href="#">Dropdown</a>
                            <div className="is-drop-content">
                                <a href="/">Home</a>
                                <a href="/">Blog</a>
                                <a href="/">FAQ</a>
                                <a href="/">Register</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown