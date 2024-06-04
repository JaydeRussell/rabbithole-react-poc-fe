'use client'
import "./search.css";

import React, {ComponentState } from 'react';
import { SearchHeader, SearchResults, SearchPagination } from '../components';
import { Question } from '@/types';

const defaultPageSize = 4;

interface SearchState extends ComponentState {
    searchTerm: string,
    page: number,
    pageSize: number,
    results: Question[],
    totalFound: number,
    isLoaded: boolean,
    error: string,
}

export default class Search extends React.Component<any, SearchState> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchTerm: "",
            page: 1,
            pageSize: defaultPageSize,
            results: [],
            totalFound: 0,
            isLoaded: false,
            error: "",
        };
    }

    componentDidMount() {
        this.fetchSearchResults("", 1, defaultPageSize)
    }

    // TODO: put this in a util package
    buildSearchQuery = (term: string, page: number, pageSize: number) => {
        return `search-term=${term}&page=${page}&page-size=${pageSize}&sort-type=created`
    }

    // TODO: don't use hardcoded urls
    fetchSearchResults = (searchTerm: string, page: number, pageSize: number) => {
        const searchQuery = this.buildSearchQuery(searchTerm, page, pageSize);
        fetch(`http://localhost:9001/search?${searchQuery}`)
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        searchTerm: res.searchTerm,
                        page: res.page,
                        pageSize: res.pageSize,
                        results: res.results,
                        totalFound: res.totalFound,
                        isLoaded: true,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error.message,
                    });
                }
            );
    }

    onSearchUpdate: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            page,
            pageSize,
        } = this.state;
        this.fetchSearchResults(e.target.value, page, pageSize);
    }

    onPageChange = (newPage: number) => {
        const {
            searchTerm,
            pageSize,
        } = this.state;
        this.fetchSearchResults(searchTerm, newPage, pageSize);
    }

    render() {
        const {
            page,
            pageSize,
            results,
            totalFound,
            isLoaded,
            error,
        } = this.state;
        const maxPages = Math.ceil(totalFound / pageSize);
        return (
            <div className="search-page" >
                <SearchHeader onSearchUpdate={this.onSearchUpdate} />
                <SearchResults results={results} isLoaded={isLoaded} error={error} />
                <SearchPagination currentPage={page} numPages={maxPages} onPageChange={this.onPageChange} />
            </div>
        );
    }

}