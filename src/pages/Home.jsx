import { useSelector } from 'react-redux';
import { HrStyle } from '../components/style/generalStyle';
import {
    MainStyle,
    BtnAction,
    DivHero,
    NavHomeMobile,
    H1Welcome,
    LinkProfile,
    DivWelcomingHome,
} from '../components/style/homeStyle';
import Hero from '../components/home/hero/Hero';
import { DivSliders } from '../components/style/homeStyle';

import HomeSlider from '../components/home/HomeSlider';
import HeaderProfile from '../components/home/HeaderProfile';

const Home = () => {
    const apiKeys = ['events', 'playlists', 'albums', 'tracks', 'users']
    const userData = useSelector((state) => state.userData.user.userData);
    const date = new Date();
    const hour = date.getHours();
    const welcome =
        hour < 6 || hour > 18
            ? 'Good evening, '
            : hour > 5 && hour < 13
                ? 'Good morning, '
                : 'Good afternoon, ';
    return (
        <MainStyle>
            <DivHero>
                <Hero />
            </DivHero>
            <DivWelcomingHome>
                <H1Welcome>{`${welcome}${userData.username}!`}</H1Welcome>
                <LinkProfile to={`../${userData.username}`}> 
                    <HeaderProfile />
                </LinkProfile>
            </DivWelcomingHome>
            <HrStyle />

            {/* // Only seen mobile  */}
            <NavHomeMobile>
                <BtnAction>Playlist</BtnAction>
                <BtnAction>Events</BtnAction>
                <BtnAction>Social</BtnAction>
                <BtnAction>New Releases</BtnAction>
            </NavHomeMobile>

            <DivSliders>
                {apiKeys.map(key => <HomeSlider key={key} apiKey={key} />)}
            </DivSliders>
        </MainStyle>
    );
};

export default Home;
