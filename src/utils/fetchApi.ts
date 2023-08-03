// import axios from "axios";

// export const baseUrl = 'https://bayut.p.rapidapi.com';

// export const fetchApi = async (url : string) => {
//   console.log('sanu');
  
//   try{
//     const { data } = await axios.get((url), {
//       headers: {
//         'x-rapidapi-host': 'bayut.p.rapidapi.com',
//         'x-rapidapi-key': '685d9cd176msh603326e09a44e44p182a7cjsn8f8524d069f9' ,
//       },
//     });
//     return data;
//   }catch(error){
//     console.log(error,'sanu');
//     return null;
//   }
// }

export const fetchRentApi = async () => {
  
  const headers = {
    'X-RapidAPI-Key': '685d9cd176msh603326e09a44e44p182a7cjsn8f8524d069f9',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }

  const response = await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6',{
    headers: headers,
    next :{
      revalidate : 100000,
    }
  });
  console.log('sanu');

  const result = await response.json();
  return result?.hits;
}

export const fetchSaleApi = async () => {
  const headers = {
    'X-RapidAPI-Key': '685d9cd176msh603326e09a44e44p182a7cjsn8f8524d069f9',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }

  const response = await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6',{
    headers: headers,
    next :{
      revalidate : 100000,
    }
  });

  const result = await response.json();
  return result?.hits;
}