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

export class ShowPageProps{
    public Title: string;
    public Description: string;
    public OverviewPictureSrc: string;
    public Rating: number;
    public ShowInfo: ShowInfo;
    public Starring: Actor[];

    constructor(Title: string, Description: string, OverviewPictureSrc: string, Rating: number, ShowInfo: ShowInfo, Starring: Actor[]){
        this.Title = Title;
        this.Description = Description;
        this.OverviewPictureSrc = OverviewPictureSrc;
        this.Rating = Rating;
        this.ShowInfo = ShowInfo;
        this.Starring = Starring;
    }
}


function ShowPage(props: ShowPageProps) {
    return (
        <div className="ShowPage container">
            <div className="row">
                <div id="title" className="md-12"><h1>Title</h1>
                    <p>{props.Title}</p></div>
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
                            <span>Streamed On {props.ShowInfo.StreamedOn}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Schedule {props.ShowInfo.Schedule}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Status {props.ShowInfo.Status}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Genres {props.ShowInfo.Genres.join(", ")}</span>
                        </div>
                    </div>                    
                </div>
                <div id="starring" className="md-6">
                    <h2>Starring</h2>
                    {
                        props.Starring.map(actor=> (
                            <div className="row">
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
