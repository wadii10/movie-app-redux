import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteMovie } from '../redux/action';

const MovieCard = ({ movie }) => {

    const dispatch = useDispatch();

    return (
        <div className='movie-card'>
            <Card style={{ width: '19rem', height: '36rem' }}>
                <Card.Img variant="top" src={movie.imageSrc} style={{ height: '25rem' }} />
                <Card.Body>
                    <Card.Title> {movie.name} </Card.Title>
                    <Card.Text>
                        {/* <StarRating rating={item.rating} /> */}
                         {movie.date} 
                    </Card.Text>
                    <div className="btn-card">
                        <Button variant="primary" onClick={() => dispatch(deleteMovie(movie.id))} > Delete </Button>
                        {/* <UpdateMovie item={item} update={update} /> */}
                        <Link to={`/detail/${movie.id}`} ><Button variant="primary" > Detail </Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard