import React, { useState } from 'react'
import Button from '../genericComponents/Button';
import PhotoEditModal from './PhotoEditModal';
import { PhotoItem } from './PhotoList';


interface Props {
    photo: PhotoItem;
    editHandler: (data:PhotoItem, isDelete?:boolean) => void;
    isUpload?: boolean
}


const PhotoBlock:React.FC<Props> = ({photo, editHandler, isUpload}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  
  const handleEdit = (data?:PhotoItem) => {
    if (data) editHandler(data);
    toggleModal();
  }

  const handleDelete = () => {
    editHandler(photo, true);
  }

  const handlePhotoClick = () => {
    if (photo.url) return;
    toggleModal();
  }

  return (
    <div className='photo-block'>
      <div className="photo-container" onClick={handlePhotoClick}>
        <Button styleClass="edit-btn" clickHandler={toggleModal} label="edit" />
        <Button styleClass={`delete-btn ${isUpload? 'hidden-btn':''}`} clickHandler={handleDelete} label="trash" />
        <img src={photo.url || 'https://demofree.sirv.com/nope-not-here.jpg'} alt="" />
        <h4 className='photo-title' title={photo.title}>{photo.title || 'Add photo here'}</h4>
      </div>
      { isModalOpen? <PhotoEditModal data={photo} saveHandler={handleEdit}/>:null}
    </div>
  )
}

export default PhotoBlock