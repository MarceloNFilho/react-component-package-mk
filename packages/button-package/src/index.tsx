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
  console.log(props)
  async function callApi(){
    return await axios.get('https://api.github.com/orgs/rocketseat/repos')
    .then(() => {
      console.log('funrufou')
    })
  }
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => callApi()}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
