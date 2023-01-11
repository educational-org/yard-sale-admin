import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BriefcaseIcon, CalendarIcon, XCircleIcon, CurrencyDollarIcon, MapPinIcon, PlusIcon } from '@heroicons/react/20/solid';
import Modal from '@common/Modal';
import FormProduct from '@components/FormProduct';
import Axios from 'axios';
import endPoints from '@services/api';
import useAlert from '@hooks/useAlert';
import Alert from '@common/Alert';
import { deleteProduct } from '@services/api/products';
import MainLayout from '@layout/MainLayout';

const Products = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts]: any = useState([]);
  const { alert, setAlert, toggleAlert }: any = useAlert();

  const handleDelete = (id: number) => {
    deleteProduct(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product deleted successfully',
          type: 'success',
          autoClose: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    async function getProducts() {
      const res = await Axios.get(endPoints.products.getAllProducts);
      setProducts(res.data);
    }
    try {
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }, [open, handleDelete]);

  return (
    <MainLayout>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="flex items-center justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">List of All Products</h1>
        </div>
        <div className="lg:mt-0 lg:ml-4 flex items-center justify-between">
          <span className="sm:ml-3">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-purple-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col">
                <Pagination
                    pagination={pagination}
                    setPagination={setPagination}
                    PRODUCT_OFFSET={PRODUCT_OFFSET}
                /> */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products?.map((product: any) => (
                  // Se  genera un ID UNICO STRING
                  <tr key={`Product-item-${product.id}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.category.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/dashboard/edit/${product.id}`} className="text-purple-400 hover:text-purple-900">
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <XCircleIcon onClick={() => handleDelete(product.id)} aria-hidden={true} className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal title={'Add Product'} open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </MainLayout>
  );
};

export default Products;
