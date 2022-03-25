import * as React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


type ButtonProps = {
  repoOwner: string
}
 
export const ButtonComponent: React.FC<ButtonProps> = ({ repoOwner }) => {
  const router = useRouter();

  const handleClickButton = React.useCallback(async (event: React.MouseEvent<HTMLElement>) => {
    const response = await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`);
    console.log(response.data)
    router.push('/rota2');
    event.preventDefault();
  }, [router])
  
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button 
        onClick={handleClickButton}
      >
        DESGRAÇAAAAA
      </button>
    </>
  )
}