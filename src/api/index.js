// Description: This file contains the functions to make API calls

// make API call to fetch quiz data
export const getQuizData = async (url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }catch(err){
    console.log(err);
    return;
  }
}