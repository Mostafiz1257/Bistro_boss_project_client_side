import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt, FaUser } from 'react-icons/fa';
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    const makeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PATCH"
        })
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
        refetch();
        Swal.fire("Change ot admin");

    }
})

    }
    const handleDelete = (user) => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
        <div>
            <h2 className=" text-pink-500 text-2xl font-bold">Total user is : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => makeAdmin(user._id)}>
                                                < FaUser></ FaUser>
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)}>
                                        < FaRegTrashAlt></ FaRegTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;