import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import Button from '@mui/material/Button';
import useWeb3forms from '@web3forms/react';
import { useState } from 'react';
import { Alert } from '@mui/material';
type User = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<User>({
    mode: 'onBlur',

    reValidateMode: 'onBlur',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>();
  const [visible, setVisible] = useState(true);
  if (visible) {
    setTimeout(() => setVisible(!visible), 3000);
  }
  const apiKey = process.env.REACT_APP_API_KEY as string;
  //handl submit
  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: `Portfolio Site`,
      subject: 'New Message from your Portfolio Website',
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      setVisible(true);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setVisible(true);
      setMessage(msg);
    },
  });
  //highlight red for invalid fields
  const getEditorStyle = (fieldError: FieldError | undefined) => {
    return fieldError ? `border-red-500` : '';
  };
  return (
    <section
      id="contact"
      className="grid place-items-center gap-8 text-white mb-16 p-8 section-bg bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]"
    >
      <div className="section-title">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      </div>
      {isSubmitSuccessful && isSuccess && visible && (
        <>
          <Alert
            className="top-0 mx-auto z-50"
            severity="success"
            variant="filled"
            onClose={() => setVisible(false)}
          >
            Message sent Successfully
          </Alert>
        </>
      )}
      {isSubmitSuccessful && !isSuccess && visible && (
        <>
          <Alert severity="error" variant="filled" onClose={() => setVisible(false)}>
            Something went wrong. Please try later.
          </Alert>
        </>
      )}
      <form noValidate onSubmit={handleSubmit(onSubmit)} className=" container  p-5">
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 place-items-center mb-8">
          <label htmlFor="name" className="text-3xl section-title w-min">
            FullName
          </label>
          <div className="grid place-items-center w-full">
            <input
              className={`${getEditorStyle(errors.name)} w-full p-4 border text-lg rounded bg-gray-700 text-white`}
              {...register('name', { required: `Please enter your FullName` })}
            />
            <ValidationError fieldError={errors.name} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 place-items-center mb-8">
          <label htmlFor="email" className="text-3xl section-title w-min">
            Email
          </label>
          <div className="grid place-items-center w-full">
            <input
              className={`${getEditorStyle(errors.email)} w-full p-4 text-lg border rounded bg-gray-700 text-white`}
              {...register('email', {
                required: 'You must enter your email address',

                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            <ValidationError fieldError={errors.email} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 place-items-center mb-8">
          <label htmlFor="message" className="text-3xl section-title w-min h-min">
            Message
          </label>
          <div className="grid place-items-center w-full">
            {' '}
            <textarea
              rows={4}
              className={`${getEditorStyle(errors.message)} w-full text-lg p-4 border rounded bg-gray-700 text-white`}
              {...register('message', { required: `Please write me a message` })}
            />
            <ValidationError fieldError={errors.message} />
          </div>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="bg-teal-700 rounded-lg  text-xl text-white hover:bg-teal-600"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Send'
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
