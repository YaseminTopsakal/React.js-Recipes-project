import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../requests/product';
import imgbg from '../img/ingBg.jpg';
import imgrbg from '../img/ingrbg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectFavorite } from '../requests/slice';

export default function Detail() {
  const [product, setProduct] = useState({});
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteList = useSelector(selectFavorite);

  useEffect(() => {
    getProductById(Number(param.id)).then((res) => {
      setProduct(res[0]);
    });
  }, [param.id]);

  useEffect(() => {
    const divAddFav = document.getElementById('divAddFav');
    if (divAddFav) {
      if (favoriteList.find((e) => e.strMeal === product.strMeal)) {
        divAddFav.style.display = 'none';
      } else {
        divAddFav.style.display = 'block';
      }
    }
  }, [favoriteList, product.strMeal]);

  const getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = product[`strIngredient${i}`];
      const measure = product[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div className=' row bg-dark' >
      <div className='row pt-3'>
        <div className='col-10'>
         
            <h1 className='mx-3' style={{ color: 'white' }}>
              {product.strMeal}
            </h1>
          
        </div>
        <div className='col-2' id='divAddFav'>
          <button
            className='btn btn-danger btn-lg'
            type='button'
            onClick={() => {
              dispatch(addFavorite(product));
              navigate('/favorite');
            }}
            
          >
            Add Favorite
          </button>
        </div>
      </div>

      <div className='container py-4'>
        <div className='p-1 bg-body-tertiary rounded-3 pb-5'>
          <div className='container-fluid py-1'>
            <h1 className='display-5 fw-bold'>{product.name}</h1>
            <div className='row'>
              <div className='col-md-6'>
                <img
                  src={product.strMealThumb}
                  className='card-img-bottom img-fluid'
                  alt={product.strMeal}
                  style={{ height: '700px' }}
                />
              </div>
              <div className='col-md-6'>
                <div className='row mt-3'>
                  <div className='col-12'>
                    {product.strYoutube && (
                      <iframe
                        width='100%'
                        height='315'
                        src={`https://www.youtube.com/embed/${product.strYoutube.slice(-11)}`}
                        title='YouTube video'
                        frameBorder='0'
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
                <div
                  className='row rounded-3 mt-2'
                  style={{
                    backgroundImage: `url(${imgrbg})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className='col-12'>
                    <div className='h-100 bg-body-tertiary rounded-3'>
                      <ul className='text-center my-5 px-5 py-5'>
                        {getIngredients().map((ingredient, index) => (
                          <li
                            className='text-center px-5'
                            key={index + 1}
                            style={{ color: 'black', listStyleType: 'none' }}
                          >
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div
              className='h-100 px-5 pt-3'
              style={{
                color: 'white',
                backgroundImage: `url(${imgbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className='col-md-8 fs-5 px-5 text-center'>
                {product.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
