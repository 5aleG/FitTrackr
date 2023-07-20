import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import GreetingMessage from '../../Components/GreetingMessage/greetingMessage';
import HealthScore from '../../Components/HealthScore/healthScore';


const Home = () => {
    return(
        <>
            <GreetingMessage />
            <Navbar />
            <HealthScore />
        </>
    )
};

export default Home;