import { defaultMaxListeners } from 'events';
import _ from "lodash";
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
    NavLink
} from "react-router-dom";
import sampleData from './exampleData.json';
import './HomePageGrid.css'

function HomePageGrid() {
     const defaultProps = {
         className: "layout",
         isDraggable: false,
    };

    function generateDOM() {
        const layout = generateLayout();
        return _.map(_.range(sampleData.length), function (i) {
            return (
                    <div key={i} data-grid={layout[i]} data-testid={i.toString()}>
                        <NavLink to={sampleData[i].show._links.self.href}>
                            <img alt={sampleData[i].show.name + " cover image"} src={sampleData[i].show.image?.medium} />
                        </NavLink>
                        <div className="text">Rating:{sampleData[i].show.rating.average ? sampleData[i].show.rating.average + "/10" : "0/10" }</div>
                        <div className="text">{sampleData[i].show.name}</div>
                    </div>
            );
        });
    }

    function generateLayout() {
        const p = defaultProps;
        return _.map(sampleData, function (item, i) {
            let y : number = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: 2,
                i: i.toString()
            };
        });
    }

    const ResponsiveGridLayout = WidthProvider(Responsive);
    return (
        <div className="HomePageGrid">
            <h1>Last Added Shows</h1>
            <ResponsiveGridLayout {...defaultProps}>
                {generateDOM()}
            </ResponsiveGridLayout>
        </div>
    );
}

export default HomePageGrid;