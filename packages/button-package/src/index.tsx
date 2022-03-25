import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

async function handleButtonClick(repoOwner: String) {
  const router = useRouter();

  return new Promise<String>(async resolve => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(res => {
      alert(res.data);
      router.push('/home')
      resolve('');
    })
    .catch(err => {
      alert(err);
      router.push('/error')
      resolve('');
    })
  });
}
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => handleButtonClick(repoOwner)}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
