const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;

const endPoints = {
  products: {
    getProduct: (id: any) => `${API}/api/${VERSION}/products/${id}`,
    getAllProducts: `${API}/api/${VERSION}/products/`,
    getProducts: (limit: number, offset: number) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProduct: `${API}/api/${VERSION}/products/`,
    putProducts: (id: number) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id: number) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id: number) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName: string) => `${API}/api/${VERSION}/${fileName}`,
  },
};

export default endPoints;
