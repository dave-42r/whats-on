import { useParams } from 'react-router-dom'; 
import ExampleData from './exampleData.json';

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

export interface ShowPageDetailProps{
    Title: string;
    Description: string;
    OverviewPictureSrc: string;
    Rating: number;
    ShowInfo: ShowInfo;
    Starring: Actor[];
}

interface ShowPageProps{
    showId:string
}

function ShowPage(){
const params = useParams<ShowPageProps>();

const thisMorningData = ExampleData.find((exampleData)=> exampleData.id === parseInt(params.showId));
if(!thisMorningData)
return(
    <div>no data found</div>
)


const showPageDetailProps: ShowPageDetailProps = {
    Title: thisMorningData.show.name,
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

    return (
        <ShowPageDetail {...showPageDetailProps} />
    );
}

function ShowPageDetail(showPageDetailProps: ShowPageDetailProps) {
    return (
        <div className="ShowPage container">
            
                <img alt={showPageDetailProps.Title + " cover image"} src={showPageDetailProps.OverviewPictureSrc} />
                    
            
            
            <div className="row">
                <div id="title" className="md-12"><h1>Title</h1>
                    <p>{showPageDetailProps.Title}</p></div>
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
                            <span>Streamed On {showPageDetailProps.ShowInfo.StreamedOn}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Schedule {showPageDetailProps.ShowInfo.Schedule}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Status {showPageDetailProps.ShowInfo.Status}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="md-12">
                            <span>Genres {showPageDetailProps.ShowInfo.Genres.join(", ")}</span>
                        </div>
                    </div>                    
                </div>
                <div id="starring" className="md-6">
                    <h2>Starring</h2>
                    {
                        showPageDetailProps.Starring.map(actor=> (
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
