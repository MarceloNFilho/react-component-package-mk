import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom'

export interface CallApiProps {
  key: String;
  shelter_id: String
}

export function ButtonComponent (props: CallApiProps) {
  
  async function callApi({key, shelter_id}: CallApiProps){
    let navigate = useNavigate();
    return await axios.get(`https://api.adoptapet.com/search/pets_at_shelter?key=${key}output=xml&shelter_id=${shelter_id}`)
    .then(() => {
      console.log('funrufou')
      navigate('/home')
    })
  }
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => callApi(props)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
