import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Videocard from '../components/Videocard'
import CategoryList from '../components/CategoryList'
import { Link } from 'react-router-dom'
import { getVideoApi } from '../services/allApi'


function Dashboard() {

  const [videos, setVideos] = useState([])
  const [addResponse, setAddResponse] = useState("")
  const [delResponse, setDelResponse] = useState("")

  useEffect(() => {
    getData()
  }, [addResponse, delResponse])



  const getData = async () => {
    const result = await getVideoApi()
    if (result.status == 200) {
      console.log(result.data)
      setVideos(result.data)
    }
  }

  return (
    <>

      <div className="container-fluid my-5">
        <div className="d-flex justify-content-between">
          <h2>All Videos</h2>
          <Link to={'/his'}>Watch History</Link>
          <Link  className='btn btn-danger'to={'/log'}>Log out</Link>
        </div>
        <Row>
          <Col lg={1}>
            <Addvideo addres={setAddResponse} />
          </Col>
          <Col lg={7}>
            {
              videos.length > 0 ?
                <div className="d-flex justify content even flex-wrap border border-3">
                  {
                    videos.map(item => (

                      <Videocard video={item} del={setDelResponse} />
                    ))
                  }
                </div>
                :
                <h3>No videos added yet!!</h3>
            }
          </Col>
          <Col lg={4}>
            <CategoryList />
            
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard