import React from 'react';
import Banner from './Banner';
import ClientsReview from './ClientsReview';
import Parts from './Parts';
import RewardSection from './RewardSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <RewardSection></RewardSection>
            <ClientsReview></ClientsReview>

        </div>
    );
};

export default Home;