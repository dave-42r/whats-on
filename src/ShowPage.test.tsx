import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ShowPage from './ShowPage';
import ExampleData from './exampleData.json';

test('Renders Show Page element with Title placeholder', () => {
    render(
        <ShowPage />
        );
    const showPageTitle = screen.getByText(/Title/i);
    expect(showPageTitle).toBeInTheDocument();
}); 

test('Renders Show Page with Show Info Section', () => {
    render(
        <ShowPage />
    );
    const showPageTitle = screen.getByText(/show info/i);
    expect(showPageTitle).toBeInTheDocument();
});

test('Renders Show Page with Starring Section', () => {
    render(
        <ShowPage />
    );
    const showPageTitle = screen.getByText(/starring/i);
    expect(showPageTitle).toBeInTheDocument();
});

test.skip('Renders Show Page element with rating bar', () => {
    render(
        <ShowPage />
    );
    
});

test.skip('Renders Show Page with show overview image', () => {

    //<ShowPage ShowData={ExampleData[0]} />
    render(
        <ShowPage />
    );
    const showPageTitle = screen.getByText(/Title/i);
    expect(showPageTitle).toBeInTheDocument();
});