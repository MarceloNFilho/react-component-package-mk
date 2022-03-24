import axios from 'axios';
import * as React from 'react';

export function ButtonComponent (owner: String) {
  
  async function callApi(owner: String){
    return await axios.get(`https://api.github.com/orgs/${owner}/repos`)
    .then(() => {
      console.log('funrufou')
    })
  }
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => callApi(owner)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
