import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <div className='container-fluid'>
        <Row style={{ height: '65vh' }}>
          <Col className='d-flex justify-content-center flex-column p-3'>
            <h1>MediaPlayer 2025</h1>
            <p style={{ textAlign: 'justify' }}>A spot for youtube video managment and video streaming.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut neque saepe quod beatae esse rem at optio voluptate cum, iure quis obcaecati debitis, exercitationem cumque qui alias minima dignissimos itaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis culpa commodi dolorum, recusandae tempora nobis neque ipsa nihil facere voluptatem! Iure totam labore maxime sint accusamus amet ea provident autem!
            </p>
            <Link className='btn btn-success' to={'/log'}>Click here to start</Link>

          </Col>
          <Col className='d-flex justify-content-center p-2 '>
            <img src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_1280.png" className='img-fluid' alt="banner" />
          </Col>
        </Row>



        <div className='container p-3'>
          <h4 className='my-3 '>Features</h4>
          <div className='d-flex justify-content-between'>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
              <Card.Body>
                <Card.Title>Upload Youtube Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>


            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://families-infaith.com/wp-content/uploads/2017/09/video-gallery.gif" />
              <Card.Body>
                <Card.Title>Easy Video Management</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>



            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://media1.giphy.com/media/kLOkqcrdC5mrCE7k7G/giphy.gif?cid=6c09b952rkcsb2qogmxa21ovbd80tb2cq66jh9g7n2xms2c8&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="container-fluid p-3 bg-secondary text-light my-3">
          <Row>
            <Col className='d-flex flex-column justify-content-center'>
            <h3>Simple,Easy and Secure</h3>
            <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias nobis odio dolor placeat necessitatibus optio deleniti, consequuntur molestiae eum commodi voluptates reiciendis accusantium quis asperiores corporis, quam, dolores beatae!
            </p>
            </Col>
            <Col>
            <img src="https://img.freepik.com/free-vector/cyber-security-risk-management-abstract-concept-illustration_335657-2162.jpg" alt="simple-image" className='w-75 'height='300px'/>
            </Col>
          </Row>
        </div>
        <div className="container-fluid p-2 border my-2">
          <Row>
            <Col lg={4} className='d-flex flex-column justify-content-center'>
            <h2>Checkout our new updates!!</h2>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias nobis odio dolor placeat necessitatibus optio deleniti, consequuntur molestiae eum commodi voluptates reiciendis accusantium quis asperiores corporis, quam, dolores beatae!</p>
            </Col>
            <Col lg={8}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ySaIrFs3YZg?si=cerMTqd_XzzmfeGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>


      </div>
    </>
  )
}

export default Landing