import React, { useEffect, useState } from 'react';
import Card from './Card';
import { categoryMeals, getProductByCategory, getProductRandom, searchMeals } from '../requests/product';

export default function Product() {
  const [word, setWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSearchExist, setIsSearchExist] = useState(false);

  useEffect(() => {
    categoryMeals().then((categories) => {
      setCategories(categories);
    });

    getProductRandom().then((meals) => {
      setRandom(meals[0]);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (word !== '') {
      searchMeals(word).then((meals) => {
        setSearchResults(meals);
        setIsSearchExist(true);
      });
    } else {
      setSearchResults([]);
    }
  };

  const handleProductCategory = (category) => {
    setSelectedCategory(category);
    getProductByCategory(category).then((meals) => {
      setSearchResults(meals);
      setIsSearchExist(true);
    });
  };

  return (
    <div>
      <div className='row bg-dark'>
        <div className='col-12 col-md-2 mt-5'>
          <div className='col-12 mx-3'>
            <h3 className='ml-3 mx-4' style={{ fontFamily: 'cursive', color: 'white' }}>
              Categories
            </h3>
            <div className='col-10' style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              {categories.map((category) => (
                <button
                  key={category.idCategory}
                  className={`btn btn-danger mt-3 ${selectedCategory === category.strCategory ? 'active' : ''}`}
                  onClick={() => handleProductCategory(category.strCategory)}
                >
                  {category.strCategory}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='col-12 col-md-10'>
          <div className='row d-flex justify-content-center'>
            <div className='col-6 text-center mt-5'>
              <form onSubmit={handleSearch}>
                <input
                  className='form form-control'
                  type='text'
                  placeholder='Search...'
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12 col-md-8 offset-md-2'>
              {isSearchExist && searchResults !== null ? (
                <div className='row'>
                  {searchResults.map((result) => (
                    <div key={result.idMeal} className='col-4 col-md-4'>
                      <Card product={result} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-6'>
                    <h1 className='text-center mb-5' style={{ fontFamily: 'cursive', color: 'white' }}>
                      Lucky Meal
                    </h1>
                    <Card key={random.idMeal} product={random} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
