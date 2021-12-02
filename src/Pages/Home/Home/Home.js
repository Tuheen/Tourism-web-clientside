import React from 'react';
import Navigation from '../../Shared/Header/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import AllReviews from './../Reviews/AllReviews/AllReviews';
import Footer from '../../Shared/Header/Navigation/Footer';

const Home = () => {
    return (
        <div style={{backgroundColor: '#ffcdd2'}}>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AllReviews></AllReviews>
            <AppointmentBanner></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;