import React, { useEffect, useState } from 'react'
import { getHistoryApi, deleteHistoryApi } from '../services/allApi'

function History() {
  const [History, setHistory] = useState([])
  const removeHistory = async (id) => {
    const result = await deleteHistoryApi(id)
    console.log(result)
    if (result.status == 200) {
      getData()
    }
    else {
      console.log(result)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await getHistoryApi()
    if (result.status == 200) {
      setHistory(result.data)
    }
    else {
      console.log(result)
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h2>Watch History</h2>
        {
          History.length > 0 ?
            <table className="table table-bordered my-3">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Date & Time</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {History?.map(item => (
                  <tr>
                    <td>{item.videoId}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.image} height={'200px'} alt="" />
                    </td>
                    <td>{item.datetime}</td>
                    <td>
                      <i class="fa-solid fa-trash fa-xl text-danger" onClick={() => { removeHistory(item.id) }}></i>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
            :
            <h2>No watch History !!</h2>

        }

      </div>
    </>
  )
}

export default History