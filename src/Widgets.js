import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle =(header, subtitle) => {
        return (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{header}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    };

    return(
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("My First Article", "Top News - 9999 readers")}
            {newsArticle("Corona Virus Updates", "Top News - 886 readers")}
            {newsArticle("Tesla hits highs", "Cars & auto - 3000 readers")}
            {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "code - 126 readers")}
        </div>
    )
}

export default Widgets;