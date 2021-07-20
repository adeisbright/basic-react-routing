import {
    Link
} from "react-router-dom"
export default function JobHeader(props){
    return (
        <>
            <header>
                <section className="w-100 main-header">
                        <div className="framer">
                            <div className="frame justify-content-between">
                                <div className="d-sm-hide pad-top-10">
                                    <Link className="brand" to="/">
                                        <h1>Bigjara</h1>
                                    </Link>
                                </div>
                                <nav className="d-sm-hide main-navigation pad-top-10">
                                    <Link  to="/engineers">For Engineers</Link> 
                                    <Link to="/companies">For Companies</Link> 
                                    <Link to="/login" style={{color:"#000!important"}}
                                        className="button no-border no-outline radius-5 bg-white dark-text shadow">
                                            Login
                                    </Link>
                                </nav>
                            </div>
                        </div>
                </section>   
            </header>
        </>
    )
}