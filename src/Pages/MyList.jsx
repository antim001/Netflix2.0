import Swal from 'sweetalert2';


import { useLoaderData } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';



const MyList = () => {
    const movieList = useLoaderData();

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movielist/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else {
                    Swal.fire({
                            title: "Error!",
                            text: "Failed to delete movie.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error("Error deleting movie:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete movie.",
                        icon: "error"
                    });
                });
            }
        });
    };

    return (
        <>
            <div className='w-full mt-20'>
                <h2 className='text-white text-center sm:text-xl lg:text-5xl'>Movies:{movieList.length}</h2>
                <div className='flex gap-2'>
                    {
                        movieList.map(item => (
                            <div key={item._id}>
                                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                        <button onClick={() => handleDelete(item._id)} className='absolute top-4 right-4 text-red-700' type='button'><IoMdClose /></button>
                                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default MyList;