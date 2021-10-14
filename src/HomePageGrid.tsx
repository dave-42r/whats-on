import { Responsive, WidthProvider } from 'react-grid-layout';

function HomePageGrid() {
    const layout = [
        { i: 'Column1', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: 'Column2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'Column3', x: 4, y: 0, w: 1, h: 2 }
    ];
    const layouts = { lg: layout, md: layout};
    const ResponsiveGridLayout = WidthProvider(Responsive);
    return (
        <div className="HomePageGrid">
            <ResponsiveGridLayout className="layout" layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
                <div key="Column1">Column 1</div>
                <div key="Column2">Column 2</div>
                <div key="Column3">Column 3</div>
            </ResponsiveGridLayout>
        </div>
    );
}

export default HomePageGrid;