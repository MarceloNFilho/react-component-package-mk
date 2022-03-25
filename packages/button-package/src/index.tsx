import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

const handleButtonClick = async (repoOwner: String, handleSuccess: any) => {
  return await new Promise<void>(async () => {
    handleSuccess
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(async (res) => {
      alert(res.data);
      return;
    })
  });
}
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  const router = useRouter();

  const handleSuccess = async () => {
    return await new Promise<void>(() => {
      router.push('/gluteo-direito');
      return;
    })
  }

  // const handleError = async () => {
  //   return await new Promise<void>(() => {
  //     router.push('/gluteo-esquerdo');
  //     return;
  //   })
  // }
  
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => handleButtonClick(repoOwner, handleSuccess())}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
