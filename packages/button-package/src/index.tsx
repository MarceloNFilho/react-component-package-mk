import axios from 'axios';
import * as React from 'react';

export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  
  console.log('repoOwner: ', repoOwner)
  async function callApi(repoOwner: String){
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then((res) => {
      console.log(res)
      window.location.assign('www.google.com');
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
