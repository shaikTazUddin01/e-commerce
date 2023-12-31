import React from 'react';
import useCategory from '../../../Hooks/category/useCategory';

const ManageCategory = () => {
    const [categories, refetch] = useCategory()
    console.log(categories)
    return (
        <div>
            <h1 className='text-center text-4xl  py-10'>Manage Category</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>

                            <th>Category image</th>
                            <th>category name</th>
                            <th>category subSet</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map(category => {
                            return (
                                <tr key={category?._id} className='text-center'>

                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={category?.categoryImgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>
                                        {category?.categoryName}
                                    </td>
                                    <td>{category?.subCategory ? category?.subCategory : "No sub category here"}</td>
                                    <td>
                                        <button className='btn btn-success'>Edit</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-error'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        {/* row 1 */}


                    </tbody>
                    {/* foot
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default ManageCategory;