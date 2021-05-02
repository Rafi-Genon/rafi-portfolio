import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import addServices from '../../Images/addServices.png'
import makeAdmin from '../../Images/makeAdmin.png'
import manageOrder from '../../Images/manageOrder.png'
import manageServices from '../../Images/manageServices.png'


const Projects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            <div className="p-3 shadow m-3 d-flex row">
                <div className="col-md-6 col-lg-6">
                    <img style={{width:'100%'}} src={addServices} alt="" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <h4>Business Guru</h4>
                    <p>This website is a freelance website. You can find here services whatever you want to do
                    for your business. We have expert designer, developer & musician</p>
                    <div>
                        <button>Github</button>
                        <button>Live site</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;