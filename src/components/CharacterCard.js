import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharacterCard({
    name,
    status,
    species,
    origin,
    location,
    image,
}) {
    return (
        <div>
            <Card
                image={image}
                header={name}
                meta={species + ' : ' + status}
                description={`Originally from: ${origin.name}.  Currently at: ${location.name}`}
            />
        </div>
    );
}
