import React from "react";

const Projects = () => {
    return (
        <div id="portfolio">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-4 col-sm-6"> 
                    <a href="https://kgarzelloni.github.io/06-homework-weather-dashboard/" title="Weather Dashboard">
                        <img className="img-fluid" src="src/img/Weather-Api.jpeg" alt="..." /> 
                        <div className="portfolio-box-caption">
                             <div className="project-category text-grey-50">Code Samples</div> 
                             <div className="project-name text-grey-50">Weather Dashboard</div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="https://swab-swap.herokuapp.com/" title="Swab Swap">
                        <img className="img-fluid" src="assets/img/portfolio/fullsize/swab swap-grey big png copy.png" alt="..." />
                        <div className="portfolio-box-caption">
                             <div className="project-category text-grey-50">Group Project</div> 
                             <div className="project-name text-grey-50">Swab Swap</div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="https://github.com/kgarzelloni/13-e-commerce-backend" title="E-commerce backend">
                        <img className="img-fluid" src="assets/img/portfolio/fullsize/ecommerce fullsize.jpeg" alt="..." />
                        <div className="portfolio-box-caption">
                             <div className="project-category text-grey-50">Code Sample</div> 
                             <div className="project-name text-grey-50">E-commerce backend</div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="https://github.com/kgarzelloni/09-README-Generator">
                        <img className="img-fluid" src="assets/img/portfolio/fullsize/markdown.png" alt="..." />
                        <div className="portfolio-box-caption">
                             <div className="project-category text-grey-50">Code Sample</div> 
                             <div className="project-name text-grey-50">README generator</div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="https://emilyshurtz94.github.io/Group-Project-1/" title="Marvel Fan Page">
                        <img className="img-fluid" src="assets/img/portfolio/fullsize/marvel-fullsize.png" alt="..." />
                        <div className="portfolio-box-caption">
                             <div className="project-category text-grey-50">Group Project</div> 
                             <div className="project-name text-grey-50">Marvel Fan Page</div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="https://kgarzelloni.github.io/05-work-day-scheduler/" title="Workday scheduler">
                        <img className="img-fluid" src="assets/img/portfolio/fullsize/workday scheduler.jpeg" alt="..." />
                        <div className="portfolio-box-caption p-3">
                           <div className="project-category text-grey-50">Code Sample</div> 
                           <div className="project-name text-grey-50">Work Day scheduler</div> 
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
       
    )
}

export default Projects