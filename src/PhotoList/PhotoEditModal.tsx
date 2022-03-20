import React, { useState } from 'react'
import InputWithLabel from '../genericComponents/InputWithLabel';
import { PhotoItem } from './PhotoList'

interface Props {
    data: PhotoItem;
    saveHandler: (photo?:PhotoItem) => void;
}

const PhotoEditModal:React.FC<Props> = ({data, saveHandler}) => {
    const [title, setTitle] = useState(data.title)
    const [url, setUrl] = useState(data.url)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        if (name === 'title') setTitle(value)
        else if (name === 'url') setUrl(value)
    }
    const handleSubmit = (): void => {
      saveHandler({...data, title, url})
    }
    const handleCancel = (): void => {
      saveHandler()
    }



  return (
    <div className='photo-edit-modal'>
        <div className='modal-title'> Edit Photo Details </div>
        <InputWithLabel inputLabel='title' inputValue={title} handleChange={handleChange} />
        <InputWithLabel inputLabel='url' inputValue={url} handleChange={handleChange} />
        <InputWithLabel inputLabel='id' inputValue={data.id} handleChange={handleChange} isDisabled={true}/>
        <input type="submit" value="submit" title='submit' onClick={handleSubmit} />
        <input type="button" value="cancel" title='cancel' onClick={handleCancel}/>
    </div>
  )
}

export default PhotoEditModal