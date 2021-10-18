export interface ShowInfo{
    StreamedOn: string;
    Schedule: string;
    Status: string;
    Genres: string[];
}

export interface Actor{
    CharactorName: string;
    ActorName: string;
    ProfileLink: string;
}

export interface ShowPageProps{
    Title: string;
    Description: string;
    OverviewPictureSrc: string;
    Rating: number;
    ShowInfo: ShowInfo;
    Starring: Actor[];
}


function ShowPage(showPageProps: ShowPageProps) {
    return (
        <div className="ShowPage container">
            <div className="row">
                <div id="title" className="md-12"><h1>Title</h1>
                    <p>{showPageProps.Title}</p></div>
            </div>

            <div className="row">
                <div id="show-info" className="md-6">
                    <div className="row">
                        <div className="md-12">
                            <h2>Show Info</h2>
                        </div>                        
                    </div>                    
                    <div className="row">
                        <div className="md-12">
                            <span>Streamed On {showPageProps.ShowInfo.StreamedOn}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Schedule {showPageProps.ShowInfo.Schedule}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Status {showPageProps.ShowInfo.Status}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Genres {showPageProps.ShowInfo.Genres.join(", ")}</span>
                        </div>
                    </div>                    
                </div>
                <div id="starring" className="md-6">
                    <h2>Starring</h2>
                    {
                        showPageProps.Starring.map(actor=> (
                            <div key={actor.CharactorName} className="row">
                                <div className="md-12">
                                    <span><img src={actor.ProfileLink} alt="Profile Picture" /> </span>
                                    <span>{actor.ActorName}</span>
                                    <span>{actor.CharactorName}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ShowPage;
