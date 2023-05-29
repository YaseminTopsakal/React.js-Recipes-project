import axios from 'axios';

export const searchMeals = (word) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
    .then((response) => {
      return response.data.meals;
    })
   
};

export const categoryMeals =()=>{
  return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((response)=>{
    return response.data.categories;
  })
}

export const getProductById =(id)=>{
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response)=>{
    return response.data.meals;
  })
}

export const getProductByCategory =(category)=>{
  return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  .then((response) => {
    return response.data.meals;
  })
}

export const getProductRandom =()=>{
  return axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((response)=>{
    return response.data.meals;
  })
}