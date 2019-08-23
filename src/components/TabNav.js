import React, { useState } from 'react';
import { Tab, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import LocationsList from './LocationsList';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import EpisodeList from './EpisodeList';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    const panes = [
        { menuItem: 'Tab 1', render: () => <WelcomePage /> },
        { menuItem: 'Tab 2', render: () => <LocationsList /> },
        { menuItem: 'Tab 3', render: () => <CharacterList /> },
        { menuItem: 'Tab 4', render: () => <EpisodeList /> },
    ];

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition="left"
            panes={panes}
        />
    );
}
