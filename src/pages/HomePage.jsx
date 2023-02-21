import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import bear from '../images/Bear.gif';
import TimeToStudy from '../images/TimeToStudyHome.svg';
// import TimeScreen from './TimeScreenPage.jsx';
;
function HomePage(){
    return (
        
        <div className="HomepageContainer">
            <div className="background">
                <div className='ButtonContainer'>
                    <Link to="/TimeScreen">
                        <button className='CommenceButton'>
                            Commence Studying
                        </button>
                    </Link>
                </div>

                <div className='BearContainer'>
                    <img className="Responsive" src = {TimeToStudy} alt="TimeToStudy"/>
                    <img className="Bear" src = {bear} alt="Bear pouring coffee"/>
                </div>
            </div>

        </div>
    )
}

export default HomePage;