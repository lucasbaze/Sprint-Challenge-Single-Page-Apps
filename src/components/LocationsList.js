import React, { useEffect, useState } from 'react';
import { Card, Pagination } from 'semantic-ui-react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                setLocations(data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Card.Group>
                {locations.map(location => {
                    let { name, type, residents, dimension } = location;
                    return (
                        <LocationCard
                            key={name + type}
                            name={name}
                            type={type}
                            residents={residents}
                            dimension={dimension}
                        />
                    );
                })}
            </Card.Group>
        </div>
    );
}
