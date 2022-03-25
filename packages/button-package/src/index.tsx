import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

const handleButtonClick = async (repoOwner: String, handleSuccess: any, handleError: any) => {
  return await new Promise<void>(async () => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(async (res) => {
      await alert(res.data);
      handleSuccess;
      return;
    })
    .catch(async (err) => {
      await alert(err);
      handleError;
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

  const handleError = async () => {
    return await new Promise<void>(() => {
      router.push('/gluteo-esquerdo');
      return;
    })
  }

  console.log(repoOwner);
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
