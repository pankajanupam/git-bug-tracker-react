import React from 'react';
import { Link } from "react-router-dom";

const PaginationBar = props => {
    return (
        <nav aria-label="Pagination" className="float-right">
            <ul className="pagination">
                <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
                <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
                <li><Link to="/page/2">2</Link></li>
                <li><Link to="/page/3">3</Link></li>
                <li><a href="#" aria-label="Page 4">4</a></li>
                <li className="ellipsis" aria-hidden="true"></li>
                <li><a href="#" aria-label="Page 12">12</a></li>
                <li><a href="#" aria-label="Page 13">13</a></li>
                <li className="pagination-next"><a href="#" aria-label="Next page">Next <span className="show-for-sr">page</span></a></li>
            </ul>
        </nav>
    );
}

export default PaginationBar;