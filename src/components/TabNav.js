import React, { useState } from 'react';
import { Tab, Button, Menu, Input } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import LocationsList from './LocationsList';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import EpisodeList from './EpisodeList';

const activeStyle = {
    fontSize: 20,
};

const StyledContainer = styled.div`
    diplay: flex;
    flex-direction: column;
    align-items: center;
`;

export default function TabNav() {
    const [active, setActive] = useState('home');

    return (
        <div>
            <Menu>
                <NavLink
                    exact
                    to="/"
                    activeStyle={{ backgroundColor: 'skyblue' }}
                >
                    <Menu.Item
                        active={active === 'home'}
                        onClick={() => setActive('home')}
                    >
                        Home
                    </Menu.Item>
                </NavLink>

                <NavLink
                    to="/characters"
                    activeStyle={{ backgroundColor: 'skyblue' }}
                >
                    <Menu.Item
                        active={active === 'characters'}
                        onClick={() => setActive('characters')}
                    >
                        Characters
                    </Menu.Item>
                </NavLink>

                <NavLink
                    to="/locations"
                    activeStyle={{ backgroundColor: 'skyblue' }}
                >
                    <Menu.Item
                        active={active === 'locations'}
                        onClick={() => setActive('locations')}
                    >
                        Locations
                    </Menu.Item>
                </NavLink>

                <NavLink
                    to="/episodes"
                    activeStyle={{ backgroundColor: 'skyblue' }}
                >
                    <Menu.Item
                        active={active === 'episodes'}
                        onClick={() => setActive('episodes')}
                    >
                        Episodes
                    </Menu.Item>
                </NavLink>
            </Menu>

            <Route exact path="/" render={() => <WelcomePage />} />
            <Route exact path="/characters" render={() => <CharacterList />} />
            <Route exact path="/locations" render={() => <LocationsList />} />
            <Route exact path="/episodes" render={() => <EpisodeList />} />
        </div>
    );
}
