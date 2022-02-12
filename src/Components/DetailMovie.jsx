import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const DetailMovie = () => {

    const { movieData } = useSelector((state) => state)
    const { id } = useParams();
    const item = movieData.find(el => el.id == id);

    return (
        <div className='movie-detail'>
            <Card style={{ width: '19rem', height: '36rem' }}>
                <Card.Img variant="top" src={item.imageSrc} style={{ height: '25rem' }} />
                <Card.Body>
                    <Card.Title> {item.name} </Card.Title>
                    <Card.Text>
                        {/* <StarRating rating={item.rating} /> */}
                         {item.date} 
                    </Card.Text>
                    <Link to="/" ><Button className='up up-1' >Back</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailMovie