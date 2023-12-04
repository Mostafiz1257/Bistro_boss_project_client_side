import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)  
    const total = totalPrice.toFixed(2)
    
    const handleDelete =(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${item._id}`,{
                method:"DELETE"
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    } 
    return (
        <>
            <div className=" flex justify-end	md:mr-[150px] mr-4 my-8 text-end">
                <span className="text-secondary md:mr-8 mr-4 ">Total : $ {total} only</span>
               <Link to='/dashboard/payment'>
               <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm Payment</button>
               </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food </th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{item.name}</span>
                                </td>
                                <td className="text-green-500">${item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs text-2xl"><FaTrashAlt className=" text-red-500"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    <tfoot>

                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default MyCart;