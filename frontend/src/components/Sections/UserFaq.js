/*import React from 'react'

const UserFaq = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-8 pt-16">
        <h2 className="text-3xl font-bold mb-6">Destination populaire</h2>
        
    </div>
  )
}

export default UserFaq*/

import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I know if a product is available in boutiques?",
    answer: "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
  {
    question: "How can I find the prices or get other information about Chanel products?",
    answer: "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
  {
    question: "How many collections come out every year?",
    answer: "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
  {
    question: "Are all of the fashion collections featured on the website?",
    answer: "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
  {
    question: "Where do I find products that I have seen in magazines or Social Media?",
    answer: "Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ's
      </h1>

      <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:mb-0 mb-8 md:text-left text-center">
            <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Questions
            </h2>
            <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              If you don’t find your answer, please contact us or leave a message. We’ll be more than happy to assist you.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg" alt="search" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-8/12 w-full mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <hr className="w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6">
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="flex items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => handleToggle(index)}
                >
                  <img
                    className={`transform ${openIndex === index ? 'rotate-180' : ''} dark:hidden`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    className={`transform ${openIndex === index ? 'rotate-180' : ''} dark:block hidden`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              {openIndex === index && (
                <div className="mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
