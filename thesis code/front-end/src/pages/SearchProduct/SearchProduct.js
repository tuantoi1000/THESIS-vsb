import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Fillter from '../../Components/Fillter/Fillter';
import './SearchProduct.css';

function SearchProduct() {
  const { searchValue } = useParams();
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(0);
  const [voteFilter, setVoteFilter] = useState(0);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.title = 'Search Product';
    document.getElementById('search-id').value = searchValue;

    axios
      .get(`http://localhost:8000/v1/product?nameProduct=${searchValue}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [searchValue]);

  const handleChoicePrice = (price) => {
    setPriceFilter(price);
  };

  const handleChoiceVote = (vote) => {
    setVoteFilter(vote);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPriceFilter(0);
    setVoteFilter(0);
    document.getElementById('form-reset').reset();
  };

  const filteredProducts = products.filter((product) => {
    if (searchValue === '') {
      return product;
    } else if (product.nameProduct.toLowerCase().includes(searchValue.toLowerCase())) {
      return product;
    }
  }).filter((product) => {
    if (priceFilter === 0) {
      return product;
    } else if (priceFilter === 100000) {
      return product.price <= priceFilter;
    } else if (priceFilter === 250000) {
      return product.price <= priceFilter && product.price >= 100000;
    } else if (priceFilter === 500000) {
      return product.price <= priceFilter && product.price >= 250000;
    } else if (priceFilter === 100000000) {
      return product.price >= 500000;
    }
  }).filter((product) => {
    if (voteFilter === 0) {
      return product;
    } else {
      return Math.round(product.ratting) === voteFilter;
    }
  });

  return (
    <div className="shoes_container">
      <div className="shoes_header">
        <h3 style={{ color: 'black', paddingTop: 50 }}>Keyword: {searchValue}</h3>
      </div>
      <div className="shoes_content">
        <Fillter handleChoicePrice={handleChoicePrice} handleChoiceVote={handleChoiceVote} handleClear={handleClear} />
        <div className="shoes_inner">
          {filteredProducts.map((product, index) => (
            <ProductItem data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
