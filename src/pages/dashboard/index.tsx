import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Pagination from '@common/Pagination';
import { useState } from 'react';
import { Chart } from '@common/Chart';
import MainLayout from '@layout/MainLayout';
import Image from 'next/image';

const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 5;

export const Dashboard = () => {
  const [pagination, setPagination] = useState(PRODUCT_OFFSET); //Inicialización de paginación
  //Obteniendo productos-->>
  const { data: products }: any = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET + pagination));

  const categoryNames = products?.map((product: any) => product.category);
  const categoryCount = categoryNames?.map((category: any) => category.name);
  //con el countOccurrences hacemos un reduce al array devolviendo la cantidad de veces que cada uno se genera
  const countOccurrences = (arr: any) => arr.reduce((prev: any, curr: any) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    //data de producutos para chart
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#B983FF', '#0f172a', '#f3ba2f'],
      },
    ],
  };

  return (
    <MainLayout>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Dashboard</h1>
        </div>
      </div>
      <div className="flex justify-center lg:w-2/3 sm:w-3/3 mx-auto">
        <Chart className="mb-8 mt-2 w-fit" chartData={data} />
      </div>
      <Pagination pagination={pagination} setPagination={setPagination} PRODUCT_OFFSET={PRODUCT_OFFSET} />
      <div className="flex flex-col">
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
                    <tr key={`Product-item-${product.title}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image width={80} height={80} className="h-10 w-10 rounded-full" src={product.images[0]} alt="product image" />
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Dashboard;
