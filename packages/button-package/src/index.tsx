import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

const handleButtonClick = (repoOwner: String, handleSuccess: any, handleError: any) => {
  return new Promise<void>(async () => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(res => {
      alert(res.data);
      handleSuccess;
      return;
    })
    .catch(err => {
      alert(err);
      handleError;
      return;
    })
  });
}
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  const router = useRouter();

  const handleSuccess = () => {
    return new Promise<void>(() => {
      router.push('/gluteo-direito');
      return;
    })
  }

  const handleError = () => {
    return new Promise<void>(() => {
      router.push('/gluteo-esquerdo');
      return 'erro';
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
