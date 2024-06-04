import "./searchResults.css";

import React from 'react';
import Question from './question';
import Alert from 'react-bootstrap/Alert'
import {Question as question} from '@/types'

interface SearchResultsProps {
    results: question[],
    isLoaded: boolean,
    error: string,
}

const SearchResults: React.FC<SearchResultsProps> = (props: SearchResultsProps) => {
    const {
        results,
        isLoaded,
        error,
    } = props;

    return (
        <>
            {!!isLoaded ?
                <div className='search-results'>
                    {!!error &&
                        <Alert variant='danger'>{error}</Alert>
                    }
                    {results?.map((question: question) => (
                        <div key={question.id}>
                            <Question
                                id={question.id} 
                                body={question.body} 
                                createdAt={question.createdAt} 
                                answers={question.answers} 
                            />
                        </div>
                    ))}

                </div>
                :
                <div>loading...</div>
            }
        </>
    );
}

export default SearchResults