import React from "react";

const MyWork = () => {
    return (

        <div> 
        <section className="page-section" ></section>
        <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">My work</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Collaborative</h3>
                        <p className="text-muted mb-0">Did I mention my love for teams? Teamwork makes the dreamwork!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Agile</h3>
                        <p className="text-muted mb-0">I understand the dynamic nature of web development. Scrum, kanban, code...rinse and repeat!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Current</h3>
                        <p className="text-muted mb-0">Up-to-date with industy practices. Thanks to a rigorous, high-quality bootcamp curriculum!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Made with Love</h3>
                        <p className="text-muted mb-0">I put my heart and soul into my work, let me show you!</p>
                    </div>
                </div>
            </div>
        </div>

  </div>
       
    )
}

export default MyWork