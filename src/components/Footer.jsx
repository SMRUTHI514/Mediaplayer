import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid bg-primary p-3 text-light'>
        <Row>
          <Col lg={5}>
            <h1>MediaPlayer 2025</h1>
            <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, distinctio repellat. Quo sint, cumque voluptatum autem mollitia libero, quod perferendis alias adipisci possimus numquam asperiores, pariatur laborum officiis esse aliquid?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas est beatae velit numquam perferendis, rem sunt repudiandae repellat ut quod ab dolor, officia minima animi earum ipsa harum perspiciatis obcaecati!
            </p>
          </Col>
          <Col lg={2}>
          <h1>Links</h1>
          <p><Link className='text-light' to={'/'}>Landing</Link></p>
          <p><Link className='text-light' to={'/log'}>Login</Link></p>
          <p><Link  className='text-light'to={'/reg'}>Registration</Link></p>
          </Col>
          <Col lg={5}>
          <h1>Feedbacks</h1>
          <textarea name="" placeholder='Enter Feedback' id="" className="form-control"></textarea>
          <button className="btn btn-success mt-3">Send</button>
        

          </Col>
        </Row>
        <h2 className='text-center'>MediaPlayer 2025 &copy; Copyright reserved</h2>
      </div>
    </>
  )
}

export default Footer