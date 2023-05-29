import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name:'product',
    initialState:{
        
        favoriteList:[]
    },
    reducers:{
        addFavorite:(state,yuk)=>{

            let selectedProduct= yuk.payload;
            let favList =state.favoriteList;

            
                if(favList.find((fav)=>selectedProduct.idMeal===fav.idMeal)){
                    alert(`"You have previously purchased  "${selectedProduct.strMeal} `)
                }else{
                    favList.push(selectedProduct)
                }   
        },
        removeFavorite: (state, yuk) => {
            const idMealToRemove = yuk.payload;
            state.favoriteList = state.favoriteList.filter((fav) => fav.idMeal !== idMealToRemove);
          }
        

       

    }
})


export const selectFavorite = (state) => state.product.favoriteList;
export const { addFavorite, removeFavorite } = productSlice.actions;
export default productSlice.reducer;