import React, { useEffect, useState } from "react";


const Product = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error: {error.message}</p>
    }

    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-2xl pb-5'>Products</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Id</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr className='bg-white border-b dark:border-gray-700' key={product.id} >
                                <td>{product.id}</td>
                                <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-dark'>{product.title}</th>
                                <td>${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div>
    )
}

export default Product;