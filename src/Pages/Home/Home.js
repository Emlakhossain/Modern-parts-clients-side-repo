import React from 'react';
import Banner from './Banner';
import ClientsReview from './ClientsReview';
import RewardSection from './RewardSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RewardSection></RewardSection>
            <ClientsReview></ClientsReview>

        </div>
    );
};

export default Home;