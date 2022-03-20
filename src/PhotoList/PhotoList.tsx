import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PhotoBlock from './PhotoBlock'
import './PhotoList.scss'


export interface PhotoItem {
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string,
}

const PhotoList:React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([])
  useEffect(() => {
    getPhotos()
  }, [])
  
  const emptyPhoto = {
    id: `${photos.length + 1}`,
    title: '',
    url: '',
    thumbnailUrl: '',
  }
  const getPhotos = async () => {
    const _photos = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
    setPhotos(_photos.data)
  }
  
  const editPhotoHandler = (updatedPhoto:PhotoItem) => {
    let updatePhotos = [...photos]
    const updatedPhotoIdx = photos.findIndex(photo => photo.id === updatedPhoto.id);
    if (updatedPhotoIdx > -1) {
    // Place to update the database with PUT
      const updated = updatePhotos.splice(updatedPhotoIdx, 1, updatedPhoto)
    } else {
    // Place to update the database with POST
      updatePhotos = [...updatePhotos, updatedPhoto]
    }
      setPhotos(updatePhotos)
  }
  
  const deletePhotoHandeler = (id:string) => {
    // Place to update the database with DELETE
    const updatedPhotos = photos.filter(photo => photo.id !== id);
    setPhotos(updatedPhotos);
  }

  const editHandler = (updatedPhoto:PhotoItem, isDelete:boolean = false) => {
    if (isDelete) deletePhotoHandeler(updatedPhoto.id);
    else editPhotoHandler(updatedPhoto);
  }

  return (
    <div>
      <div>PhotoList</div>
        <div className='photos-container'>
        {photos.map(photo => {
          return <PhotoBlock photo={photo} key={`photo-${photo.id}`} editHandler={editHandler}/>
        })}
        <PhotoBlock photo={emptyPhoto} editHandler={editHandler} isUpload={true} />
      </div>
    </div>
  )
}

export default PhotoList