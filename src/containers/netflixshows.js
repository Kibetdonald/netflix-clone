import React from 'react';
import api from '../api';
import { Banner } from '../components/banner/banner';
import { Row } from '../components/row';

export const Netflixshows = () => {
    return (
        <div>
            {/* Navbar */}
            <Banner/>
            
 <Row title="Trending Now" fetchUrl={api.fetchTrending} isLargeRow/>
<Row title="Top Rated" fetchUrl={api.fetchTopRated} isLargeRow/>
<Row title="Action Movies" fetchUrl={api.fetchActionMovies} isLargeRow/>
<Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} isLargeRow/>
<Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} isLargeRow/>
<Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} isLargeRow/>
<Row title="Documentaries" fetchUrl={api.fetchDocumentaries} isLargeRow/>

            
        </div>
    )
}
