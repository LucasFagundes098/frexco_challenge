import React, { useState, useEffect } from 'react'
import App from '../Components/App';
import api from '../Services/api'

function HomeView() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        api
        .get('all')
        .then((response) => setProduct(response.data))
        .catch((err) => {
          console.log('Error' + err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return (
        <div>
            <App product={product} />
        </div>
    )
}

export default HomeView;
