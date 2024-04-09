import React from 'react';
import classes from './ThumbNail.module.css';


// mock internet traffic data
const internetTraffic = {
    current: '8.709 Tb/s',
    peak: '10.000 Tb/s',
    ASNS: 1000,
};
// TODO: create a custom hook to fetch data from the API 
//  hook should be kept in the same folder as the components 
const Thumbnail = () => (
    <div className={classes.datathumbnail}>
        <div className={classes.minivisualisation}>
            <img src="/linegraph.svg" alt="Line graph" />
        </div>
        <div className={classes.dataDiv}>
            <div className={classes.dataItem}>
                <div className={classes.dataLabel}>CUR</div>
                <div className={classes.dataPoint}>{internetTraffic.current}</div>
            </div>
            <div className={classes.dataItem}>
                <div className={classes.dataLabel}>PEAK</div>
                <div className={classes.dataPoint}>{internetTraffic.peak}</div>
            </div>
            <div className={classes.dataItem}>
                <div className={classes.dataLabel}>ASNS</div>
                <div className={classes.dataPoint}>{internetTraffic.ASNS}</div>
            </div>
        </div>
    </div>
);

export default Thumbnail;