import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom'

export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  
  console.log('repoOwner: ', repoOwner)
  async function callApi(repoOwner: String){
    const navigate = useNavigate();
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
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
      <button onClick={() => callApi(repoOwner)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
