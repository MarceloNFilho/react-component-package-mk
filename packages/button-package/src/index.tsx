import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

const handleButtonClick = async (repoOwner: String, handleSuccess: any, handleError: any) => {
  return await new Promise<void>(async (resolve) => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(async (res) => {
      alert(res.data);        
      setTimeout( () => {
        resolve(handleSuccess);
      }, 1500);
    })
    .catch(async (err) => {
      alert(err);
      setTimeout( () => {
        resolve(handleError);
    }, 1500);
    })
  });
}
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  const router = useRouter();

  const handleSuccess = async () => {
    return await new Promise<void>(() => {
      router.push('/rota1');
      return;
    })
  }

  const handleError = async () => {
    return await new Promise<void>(() => {
      router.push('/rota2');
      return;
    })
  }
  
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => handleButtonClick(repoOwner, handleSuccess(), handleError())}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}

