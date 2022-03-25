import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  
  console.log('repoOwner: ', repoOwner)
  const router = useRouter();
  async function callApi(repoOwner: String){
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then((res) => {
      console.log(res)
    })
  }
  console.log(callApi)
  function handleClick() {
    router.push('/home')
  }
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => handleClick}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
