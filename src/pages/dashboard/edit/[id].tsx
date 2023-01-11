import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormProduct from '@components/FormProduct';
import Axios from 'axios';
import endPoints from '@services/api';

const Edit = () => {
  const [product, setProduct]: any = useState(null);
  const router = useRouter();

  
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const res = await Axios.get(endPoints.products.getProduct(id))
      setProduct(res.data);
    }
    getProduct()
  }, [router?.isReady]);



  return <FormProduct product={product} />;
};

export default Edit;
