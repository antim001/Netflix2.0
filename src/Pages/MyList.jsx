import {useLoaderData} from 'react-router-dom';

const MyList = () => {
    const movieList=useLoaderData();
    console.log(movieList);
    return (
        <>
            <div className='w-full mt-20'>
              <h2 className='text-white text-center sm:text-xl lg:text-5xl'>Movies:{movieList.length}</h2>
            <div className='flex gap-2'>
            {
                movieList.map(item=><div  key={item.id}>
<div 
            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ' 
           
        >
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>     
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                
            </div>
        </div>
                </div>)
            }
            </div>
            </div>
        </>
    );
};

export default MyList;
