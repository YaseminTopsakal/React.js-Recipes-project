import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorite } from '../requests/slice'
import FavoriteDetail from './FavoriteDetail';

export default function Favorite() {

    const favoriteList = useSelector(selectFavorite);
    console.log(favoriteList)
    return (




        <div className='row bg-dark pt-5'>
            <div className='col-1 mt-5'>


            </div>


            <div className='col-10 '>

                <div className='row'>




                    {
                        favoriteList.map((i) => {
                            return (<FavoriteDetail key={i.idMeal} product={i} />)
                        })
                    }

                </div>

            </div>
            <div className='col-1 mt-5'>


            </div>

        </div>





    )
}
