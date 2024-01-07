import React from 'react'
import Form from '../Form/Form'
import { addAds } from '../../Utils/Forms/addAds'

const AdsModal = () => {
  return (
    <div>
        <Form {...addAds}/>
    </div>
  )
}

export default AdsModal