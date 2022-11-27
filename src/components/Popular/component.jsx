import { generateImgUrl, generateDate, getColor, generatePopularity  } from '../helpers/helpers'

const Popular = ({ id, original_title, poster_path, release_date, vote_average }) => {
  return (
    <div className='movie'>
         <a href={'#movieid=' + {id}}>
            <img src={generateImgUrl(poster_path)} alt="${original_title}"/>
         </a>
         <div className="movie_content">
            <div className="title">{original_title}</div>
            <div className="date">{generateDate(release_date)}</div>
            <div className={'raiting ' + getColor(vote_average)}> {generatePopularity(vote_average)} </div>
         </div>
     </div>
  )
}

export default Popular;
