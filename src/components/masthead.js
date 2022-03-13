import React from "react";

const Masthead = () => {
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Karrie Garzelloni</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Full Stack Web Development certficate, University of Arizona, March 2022. <br></br>Experience with in-demand technologies including HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB and React. </p>
                        <a className="btn btn-primary btn-xl" href="#about">Little bit about me</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Masthead