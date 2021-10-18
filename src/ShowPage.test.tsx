import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ShowPage, { Actor, ShowInfo, ShowPageProps } from './ShowPage';
import ExampleData from './exampleData.json';


const thisMorningData = ExampleData[0];
const showPageProps: ShowPageProps = {
    Title: thisMorningData.name,
    Description: thisMorningData.show.summary ?? "",
    Rating: thisMorningData.show.rating.average ?? 0,
    OverviewPictureSrc: thisMorningData.show.image?.medium ?? "",
    ShowInfo: {
        Genres: thisMorningData.show.genres,
        Schedule: thisMorningData.show.schedule.days.join(", "),
        Status: thisMorningData.show.status,
        StreamedOn: thisMorningData.show.network?.name ?? ""
    },
    Starring: [
        {
            ActorName:"Test",
            CharactorName:"Test",
            ProfileLink:""
        }
    ]

};

test('Renders Show Page element with Title placeholder', () => {

    render(
        <ShowPage {...showPageProps} />
        );
    const showPageTitle = screen.getByText(/Title/i);
    expect(showPageTitle).toBeInTheDocument();
}); 

test('Renders Show Page with Show Info Section', () => {
    render(
        <ShowPage {...showPageProps} />
    );
    const showPageTitle = screen.getByText(/show info/i);
    expect(showPageTitle).toBeInTheDocument();
});

test('Renders Show Page with Starring Section', () => {
    render(
        <ShowPage {...showPageProps} />
    );
    const showPageTitle = screen.getByText(/starring/i);
    expect(showPageTitle).toBeInTheDocument();
});

test.skip('Renders Show Page element with rating bar', () => {
    render(
        <ShowPage {...showPageProps} />
    );
    
});

test.skip('Renders Show Page with show overview image', () => {

    //<ShowPage ShowData={ExampleData[0]} />
    render(
        <ShowPage {...showPageProps} />
    );
    const showPageTitle = screen.getByText(/Title/i);
    expect(showPageTitle).toBeInTheDocument();
});