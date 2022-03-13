import React from "react";
import SwabSwap from '../img/swabswap.png';
import Marvel from '../img/marvel.png';
import TabulaRasa from '../img/tabularasa.png'

const Projects = () => {
    return (
        <div id="portfolio">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-2 col-sm-6">
                    <a href="https://swab-swap.herokuapp.com/" title="Swab Swap">
                        <img className="img-fluid" src={SwabSwap} alt={"application swab swap logo"} />
                        <div className="portfolio-box-caption">
                             {/* <div className="project-category text-grey-50">Group Project</div>  */}
                             <div className="project-name text-grey-50"></div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <a href="https://emilyshurtz94.github.io/Group-Project-1/" title="Marvel Fan Page">
                        <img className="img-fluid" src={Marvel} alt={"Marvel Fanpage"} />
                        <div className="portfolio-box-caption">
                             {/* <div className="project-category text-grey-50">Group Project</div>  */}
                             <div className="project-name text-grey-50"></div> 
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <a href="https://tabula-rasa122.herokuapp.com/" title="Tabula Rasa">
                        <img className="img-fluid" src={TabulaRasa} alt={"mental health wellness application"} />
                        <div className="portfolio-box-caption p-3">
                           {/* <div className="project-category text-grey-50">Code Sample</div>  */}
                           <div className="project-name text-grey-50"></div> 
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
       
    )
}

export default Projects