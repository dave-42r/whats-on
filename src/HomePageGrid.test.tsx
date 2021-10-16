import React from 'react';
import { render, screen, within } from '@testing-library/react';
import HomePageGrid from './HomePageGrid';
import ExampleData from './exampleData.json';

test('Renders Grid title, Last Added Shows', () => {
    render(<HomePageGrid grid-data={ExampleData}/>);
    const firstGridItem = screen.getByText(/last added shows/i);
    expect(firstGridItem).toBeInTheDocument();
});

test('Renders Grid of Episodes, should contain a card with the title Good Morning Britain', async () => {
    render(<HomePageGrid grid-data={ExampleData} />);
    const card = screen.getByTestId('0');
    expect(card).toHaveTextContent("Good Morning Britain")
});

test('Renders Grid of Episodes, should contain a card with episode image matching sample data', async () => {
    const {getByAltText} = await render(<HomePageGrid grid-data={ExampleData} />);
    const image = getByAltText('Good Morning Britain cover image');
    expect(image).toHaveAttribute('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/321/804657.jpg')
});

test('Renders Grid of Episodes, should contain a card with an episode rating', async () => {
    render(<HomePageGrid grid-data={ExampleData} />);
    const card = screen.getByTestId('0');
    const rating = within(card).getByText(/rating/i);
    expect(rating).toHaveTextContent("0/10")
});

test('Renders a card with a link to it\'s own show page', async () => {
    render(<HomePageGrid grid-data={ExampleData} />);
    const card = screen.getByTestId('0');
    const linkToShowPage = within(card).findByText(/<a>/);
    expect(linkToShowPage).toHaveAttribute("href","");
});
