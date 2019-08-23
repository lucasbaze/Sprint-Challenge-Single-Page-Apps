import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Resident Count: {residents.length}</Card.Meta>
                <Card.Description>
                    Located at Dimension: {dimension}
                    <p> </p>
                    Type of Location: {type}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}
