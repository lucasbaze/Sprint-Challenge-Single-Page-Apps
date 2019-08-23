import React, { useState } from 'react';
import { Select, Form, Input, Button } from 'semantic-ui-react';

export default function SearchForm({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="search-form">
            <Form onSubmit={() => onSearch(searchTerm)}>
                <Input
                    onChange={handleInputChange}
                    placeholder="Name"
                    value={searchTerm}
                    name="searchTerm"
                />
                <Button type="submit">Search</Button>
            </Form>
        </section>
    );
}
