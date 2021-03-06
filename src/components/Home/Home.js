import React from 'react';
import Main from './Main';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import AboutUs from './AboutUs';
import WhoHelp from './WhoHelp';
import Footer from './Footer';

const Home = () => {
    return(
        <>
            <Main />
            <FirstSection />
            <SecondSection />
            <AboutUs />
            <WhoHelp />
            <Footer />
        </>
    );
}

export default Home;