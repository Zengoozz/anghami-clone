import { loader } from '../assets'

const Loader = ({ title }) => (
  <div className='flex justify-center items-center flex-col w-full'>
    <img src={loader} alt="loading"
      className='w-[130px] h-[130px] object-contain' />
    <p className='text-white font-bold text-[25px] mt-[10px]'>
      {title || 'Loading'}
    </p>
  </div>
);

export default Loader;
