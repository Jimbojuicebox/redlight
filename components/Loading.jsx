import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center pt-16 pb-44'>
      <Image
        src='/assets/loader.gif'
        width={50}
        height={50}
        alt='loader'
      />
    </div>
  );
};

export default Loading;