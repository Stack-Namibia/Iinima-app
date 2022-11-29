import Form from "./Form";

export default function SignIn() {
  return (
    <div className='flex items-center min-h-screen bg-gray-50'>
      <div className='flex-1 h-full max-w-7xl m-5 bg-white rounded-lg shadow-xl md:mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <Form />
          <div className=' h-0 md:h-auto md:w-1/2 md:visible'>
            <img
              className='object-cover w-full h-full'
              src='/sign-in-background.svg'
              alt='img'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
