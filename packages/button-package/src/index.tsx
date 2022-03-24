import axios from 'axios';
import * as React from 'react';

export function ButtonComponent (repoOwner: String) {
  console.log('repoOwner: ', repoOwner)
  async function callApi(repoOwner: String){
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(() => {
      console.log('funrufou')
    })
  }
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => callApi(repoOwner)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
