import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom'

type CallApiProps = {
  key: String,
  shelter_id: String
}
//@ts-ignore
const callApi = (key, shelter_id) => {
  let history = useNavigate();
  return axios.get(`https://api.adoptapet.com/search/pets_at_shelter?key=${key}output=xml&shelter_id=${shelter_id}`)
  .then(() => {
    console.log('funrufou')
    history('/qualquer')
  })
}

const ButtonComponent: React.FC<CallApiProps> = (key, shelter_id) => {
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => callApi(key, shelter_id)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}

export default ButtonComponent;