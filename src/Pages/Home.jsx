import React from 'react';
import Banner from '../Components/Banner';
import FeaturesSection from '../Components/FeaturesSection';
import AboutSection from '../Components/AboutSection';
import ReviewSection from '../Components/ReviewSection';
import Newsletter from '../Components/Newsletter';
import TeamSection from '../Components/TeamSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <AboutSection></AboutSection>
            {/* TODO : featured class section*/}
            <ReviewSection></ReviewSection>
            <Newsletter></Newsletter>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;