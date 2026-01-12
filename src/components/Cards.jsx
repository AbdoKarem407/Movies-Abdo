
import Card from 'react-bootstrap/Card';




function KitchenSinkExample({movie}) {
  

  return (
    <>
    <div className="box">
 
    <Card className='Cards'
     onClick={() => window.open(movie.video, "_blank")} >
      <Card.Img
        variant="top"
          src={movie.image}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        className="imgbanda"
      />
      <Card.Body >
        <Card.Title className='card-title'>{movie.title}</Card.Title>

        <Card.Text className='card-text'>⭐ {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  

   </div> 
    </>
  );
}

export default KitchenSinkExample;