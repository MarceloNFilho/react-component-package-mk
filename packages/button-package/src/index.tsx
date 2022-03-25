import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';


function handleSuccess(){
  const router = useRouter();
  router.push('/gluteo-direito')
}

function handleError(){
  const router = useRouter();
  router.push('/gluteo-esquerdo')
}

async function handleButtonClick(repoOwner: String) {

  return new Promise<String>(async resolve => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(res => {
      alert(res.data);
      handleSuccess()
      resolve('');
    })
    .catch(err => {
      alert(err);
      handleError()
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
