import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom'

export interface CallApiProps {
  key: String;
  shelter_id: String
}

const callApi = ({key, shelter_id}: CallApiProps) => {
  let history = useNavigate();
  return axios.get(`https://api.adoptapet.com/search/pets_at_shelter?key=${key}output=xml&shelter_id=${shelter_id}`)
  .then(() => {
    console.log('funrufou')
    history('/qualquer')
  })
}

export const ButtonComponent: React.FC<{props: CallApiProps}> = ({props}) => {
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
