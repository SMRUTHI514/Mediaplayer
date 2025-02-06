import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import { getCategoryApi } from '../services/allApi'
import { deleteCategoryApi, addVideoToCategoryApi } from '../services/allApi'
import { toast } from 'react-toastify'
import Videocard from './Videocard'



function CategoryList() {
  const [list, setList] = useState([])
  const [addResponse, setAddResponse] = useState("")
  useEffect(() => {
    getData()
  }, [addResponse])

  const dragOverHandler = (e) => {
    e.preventDefault()
    console.log("dragging over")
  }

  const dropEventHandler = async (e, cat) => {
    console.log("dropped")
    // console.log(e.dataTransfer.getData('video'))
    // console.log(cat)
    const video = JSON.parse(e.dataTransfer.getData('video'))
    cat.videos.push(video)
    // console.log(cat)
    const result = await addVideoToCategoryApi(cat.id, cat)
    console.log(result)
    if (result.status == 200) {
      toast.success("video added to category")
      getData()
    }
    else {
      toast.error("video adding failed!!...something went wrong")
    }
  }
  const removeCategory = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result)
    if (result.status == 200) {
      getData()
    }
    else {
      toast.warning("Deletion Failed !!")
    }

  }

  const getData = async () => {
    const result = await getCategoryApi()
    console.log(result)
    if (result.status == 200) {
      setList(result.data)

    }
  }
  return (
    <>
      <div className="w-100">
        <h3 className="mb-3">Category List</h3>
        <AddCategory addres={setAddResponse} />
        <div className="d-flex flex-column mt-4 p-2 border border-2 border-dark">
          {
            list.length > 0 ?
              <>
                {
                  list.map(item => (
                    <div className='w-100 border m-2 shadow p-3 rounded'
                      onDragOver={(e) => { dragOverHandler(e) }} onDrop={(e) => { dropEventHandler(e, item) }}>
                      <div className='d-flex justify-content-between'>
                        <h4>{item.name}</h4>
                        <button className='btn' onClick={() => { removeCategory(item.id) }}>
                          <i class="fa-solid fa-trash text-danger fa-xl" ></i>
                        </button>
                      </div>
                      {
                        item.videos.length > 0 &&
                        item.videos.map(vid => (
                          <Videocard video={vid} cat={true} />
                        ))
                      }
                    </div>
                  ))
                }
              </>
              :
              <div>
                <h2 className='text-center'>No category added!!</h2>

              </div>
          }
        </div>
      </div>
    </>
  )
}

export default CategoryList