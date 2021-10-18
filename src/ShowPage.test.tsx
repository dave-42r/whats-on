import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import {
  MemoryRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowPage from './ShowPage';
import ExampleData from './exampleData.json';


const thisMorningData = ExampleData[0];

const renderComponent = ({ showId }) =>
  render(
    <MemoryRouter initialEntries={[`/show/${showId}`]}>
      <Route path="/show/:showId">
        <ShowPage />
      </Route>
    </MemoryRouter>
  );

test('Renders Show Page element with Title placeholder', async () => {
    
        // Render new instance in every test to prevent leaking state
        const { getByText } = renderComponent({ showId: thisMorningData.id });

        await waitFor(() => getByText(/Title/i));
}); 

test('Renders Show Page with Show Info Section', async () => {
    const { getByText } = renderComponent({ showId: thisMorningData.id });
    await waitFor(() => getByText(/show info/i));
});

test('Renders Show Page with Starring Section', async () => {
    const { getByText } = renderComponent({ showId: thisMorningData.id });
    await waitFor(() => getByText(/starring/i));
});

test.skip('Renders Show Page element with rating bar', () => {
    render(
        <ShowPage showId={thisMorningData.id} />
    );
    
});

test.skip('Renders Show Page with show overview image', () => {
    render(
        <ShowPage showId={thisMorningData.id} />
    );
    const showPageTitle = screen.getByText(/Title/i);
    expect(showPageTitle).toBeInTheDocument();
});