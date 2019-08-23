import React, { useEffect, useState } from 'react';

import { Card } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
    const [characters, setCharacter] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
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
    }, []);

    return (
        <section className="character-list grid-view">
            <Card.Group>
                {characters.map(character => {
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
                            key={name + status}
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
    );
}
