import React, { useEffect, useState } from 'react';

import { Card } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
    const [characters, setCharacter] = useState([]);
    const [searchUrl, setSearchUrl] = useState(
        'https://rickandmortyapi.com/api/character/'
    );

    useEffect(() => {
        fetch(searchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                setCharacter(data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, [searchUrl]);

    const onSearch = searchTerm => {
        let query =
            'https://rickandmortyapi.com/api/character/' +
            `?name=${searchTerm}`;
        setSearchUrl(query);
    };

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            <section className="character-list grid-view">
                <Card.Group centered>
                    {characters.map((character, i) => {
                        let {
                            name,
                            status,
                            species,
                            origin,
                            location,
                            image,
                        } = character;
                        return (
                            <CharacterCard
                                key={name + status + i}
                                name={name}
                                status={status}
                                species={species}
                                origin={origin}
                                image={image}
                                location={location}
                            />
                        );
                    })}
                </Card.Group>
            </section>
        </div>
    );
}
