import React, { useState, useEffect } from 'react';

import { Card } from 'semantic-ui-react';

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                let episodeData = data.results.map(episode => {
                    return {
                        header: episode.name,
                        meta: episode.episode,
                        description: episode.air_date,
                    };
                });
                setEpisodes(episodeData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return <Card.Group items={episodes} />;
};

export default EpisodeList;
