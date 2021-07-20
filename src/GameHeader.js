import {
    Link
} from "react-router-dom"
export default function GameHeader(props){
    return (
        <>
            <header>
                <section className="w-100 main-header m-b-5">
                        <div className="framer">
                            <div className="frame justify-content-between">
                                <div className="d-sm-hide pad-top-10 pad-top-20">
                                    <Link className="brand" to="/">
                                        <h1>Vhenn Games</h1>
                                    </Link>
                                </div>
                                <nav className="d-sm-hide main-navigation pad-top-10">
                                    <Link  to="/create">Create</Link> 
                                    <Link to="/users">Users</Link> 
                                </nav>
                            </div>
                        </div>
                </section>   
            </header>
        </>
    )
}