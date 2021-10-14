import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePageGrid from './HomePageGrid';
import ExampleData from './exampleData.json';

test('Renders Grid of Episodes, should contain a card with episode name, image link, rating - titles should match dummy data', () => {
    render(<HomePageGrid grid-data={ExampleData}/>);
    const firstGridItem = screen.getByText(/Column 1/i);
    expect(firstGridItem).toBeInTheDocument();
});
