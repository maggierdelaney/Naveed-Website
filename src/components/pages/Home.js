import React from 'react';
import './style.css';

export default function Home() {
    return (
        <div>
            <br></br>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={require("../images/HeadShot.JPG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div class="col" id="intro-text">
                        <br></br>
                        <h2 className="title-font">Naveed Shan, Doctor of Physical Therapy</h2>
                        <br></br>
                        <p className="paragraph-font">Naveed Shan is a Phoenix, AZ based physical therapist with dual board ceritifcation in Orthopedic and Sport physical therapy as well as a Certified Strength and Conditioning Specialist.</p>
                        <br></br>
                        <p>
                            My approach to care involves prioritizing the individual ahead of the disease or injury, with an emphasis on identifying the underlying causes rather than merely addressing the symptoms. This approach aims to address the root causes, and a comprehensive understanding of my patient's health and well-being.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}