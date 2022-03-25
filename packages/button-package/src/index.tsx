// import axios from 'axios';
import * as React from 'react';
import { useRouter } from 'next/router';

// const handleError = () => {
//   const router = useRouter();
//   router.push('/gluteo-esquerdo')
// }



// const handleButtonClick = (repoOwner: String) => {

//   return new Promise<String>(async resolve => {
//     return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
//     .then(res => {
//       alert(res.data);
//       handleSuccess()
//       resolve('');
//     })
//     // .catch(err => {
//     //   alert(err);
//     //   handleError()
//     //   resolve('');
//     // })
//   });
// }
 
export const ButtonComponent: React.FC<{repoOwner: String}> = ({repoOwner}) => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/gluteo-direito')
  }

  console.log(repoOwner);
  return (
    <>
      <span>
        Teste N° 375647356758678787867999999
      </span>
      <button onClick={() => handleSuccess()}>
        DESGRAÇAAAAA
      </button>
    </>
  )
}
