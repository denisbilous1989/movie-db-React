
import { ProgressBar } from  'react-loader-spinner'

import useGetData from '../../hooks/useGetData';
import { generateUrl } from '../../helpers/helpers'
import Popular from '../../Popular';

import './style.scss'


const Home = () => {

  const { data, error, loading } = useGetData(generateUrl('movie/popular'))
  console.log('data', data);
  console.log('error', error);
  console.log('loading', loading);

  return (
    <>
      <div className="search_movies">
      <div className="content_wrapp">
        <div className="content_title">
          <h2>Welcome</h2>
          <h3>Millions of movies, series and people. Explore now.</h3>
        </div>
        <div className="content_serch">
          <form className="search_form" action="#">
            <label>
              <input className="input" type="text" name="name" id="name" placeholder="Enter a movie"/>
            </label>
            <input className="btn" type="submit" value="Search"/>
          </form>
        </div>
      </div>
    </div>

    {error || data.success === false
     ? <h1>The resource you requested could not be found.</h1> 
     : ''}

    {loading 
     ? <ProgressBar
          height="100"
          width="100%"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor = '#F4442E'
          barColor = '#51E5FF'
       /> 
       : ''
    }

    {data.length !== 0
     ? (data.results.map(({ id, poster_path, original_title, release_date, vote_average }) => {
        return (
          <Popular 
            key={id}
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            release_date={release_date}
            vote_average={vote_average}
         />
        )
       })) 
       : ''
    }
    </>
  )
}

export default Home;