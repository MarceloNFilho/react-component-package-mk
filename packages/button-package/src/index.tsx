import axios from 'axios';
import * as React from 'react';
export interface CallApiProps {
  key: String;
  shelter_id: String
}
export interface ObjectProps {
  props: CallApiProps;
}

export function ButtonComponent ({props}: ObjectProps) {
  
  async function callApi({key, shelter_id}: CallApiProps){
    return await axios.get(`https://api.adoptapet.com/search/pets_at_shelter?key=${key}output=xml&shelter_id=${shelter_id}`)
    .then(() => {
      console.log('funrufou')
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
