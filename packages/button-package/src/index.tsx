import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

const handleButtonClick = async (repoOwner: String, handleSuccess: any, handleError: any) => {
  return await new Promise<void>(async () => {
    return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
    .then(async (res) => {
      alert(res.data);
      if(res.data){
        await handleSuccess;
        return;
      }
    })
    .catch(async (err) => {
      alert(err);
      if(err){
        await handleError;
        return;
      }
    })
  });
}
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  const router = useRouter();

  const handleSuccess = async () => {
    return await new Promise<void>(() => {
      alert('success')
      router.push('/rota1');
      return;
    })
  }

  const handleError = async () => {
    return await new Promise<void>(() => {
      alert("suck's ass")
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
