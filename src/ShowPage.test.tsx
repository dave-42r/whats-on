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