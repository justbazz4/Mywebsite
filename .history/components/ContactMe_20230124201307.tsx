
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
name: string,
email: string,
subject: string,
message: string
};


type Props = {}
  

function ContactMe({}: Props) {
    const { register, handleSubmit,  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:blockchain.bazz@gmail?subject=${formData.subject}&
    body=Hi, my name is 
    ${formData.name}. ${formData.message} (${formData.email})`
  };

  return <div className='h-screen relative flex overflow-hidden flex-col md:text-left text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl mb-10'>
         Contact
        </h3> 

        <div className='flex flex-col space-y-5 mt-52'>
        <h4 className='text-3xl font-semibold text-center'>
                I have got just what you need. {""}
                <span className='decoration-green-700 underline'>Let's Talk</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                   <PhoneIcon className='text-purple-900 h-7 w-7 animate-pulse'/>
                   <p className='text-2xl'>08080319166</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                   <EnvelopeIcon className='text-purple-900 h-7 w-7 animate-pulse'/>
                   <p className='text-2xl'>blockchain.bazz@gmail.com
                                                                      </p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                   <MapPinIcon className='text-purple-900 h-7 w-7 animate-pulse'/>
                   <p className='text-2xl'> NIGERIA </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} 
            className=' flex flex-col space-y-2 w-fit mx-auto'>
            
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='name' className='contactInput'  type='text'/>
                    <input {...register('email')} placeholder='email' className='contactInput' type='email' />
                </div>
                 <input {...register('subject')} className='contactInput 'type='text' placeholder='subject' />

                 <textarea {...register('message')} placeholder='message' className='contactInput' />
                 <button type='submit' className='bg-green-500 py-3 px-10 rounded-md text-black font-bold bottom-5 width-50
                  text-lg'>
                    Sumbit
                </button>
            </form>
        </div>
  </div>
  
}

export default ContactMe