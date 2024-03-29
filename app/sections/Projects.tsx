import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className='w-full h-[1500px] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-lightnavy text-white'>
      <div className='w-full h-[50px]'>
        <h2 className='text-5xl flex justify-center'>
          What I&apos;ve Worked On
        </h2>
      </div>
      <div className='bg-purple-400 w-[1300px] h-80 m-5 p-5 flex rounded-lg'>
        <div className='h-full w-1/3 bg-gray-600'>
          <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 1</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>

      <div className='bg-green-500 w-[1300px] h-80 m-5 p-5 flex'>
        <div className='h-full w-1/3 bg-gray-600'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 2</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>

      <div className='bg-green-500 w-[1300px] h-80 m-5 p-5 flex'>
        <div className='h-full w-1/3 bg-gray-600'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 3</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
