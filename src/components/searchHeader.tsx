import "./searchHeader.css"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface SearchHeaderProps {
    onSearchUpdate: React.ChangeEventHandler<HTMLInputElement>,
}

const SearchHeader: React.FC<SearchHeaderProps> =  (props: SearchHeaderProps) => {
    const {
        onSearchUpdate
    } = props;
    return (
        <Navbar>
            <Container>
                <div className="project-header">
                    <input onChange={onSearchUpdate} placeholder="search" className="search-bar" />
                </div>
            </Container>
        </Navbar>
    )
}

export default SearchHeader