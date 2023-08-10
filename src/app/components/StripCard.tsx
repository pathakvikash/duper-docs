'use client';
import React, { useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { TiFlowSwitch } from 'react-icons/ti';
import { AiOutlineCopy } from 'react-icons/ai';

const StripeCard = () => {
  const codeSnippet = `
  {
    "object": "list",
    "url": "/v1/events",
    "has_more": false,
    "data": [
      {
        "id": "evt_skndk;ada1",
        "object": "event",
        "api_version": "2019-02-19",
        "created": 1691486661,
        "data": {
          "id": "seti_1Ncm9J2",
          "object": "setup_intent",
          "application": null,
          "automatic_payment_methods": null,
          "cancellation_reason": null,
          "client_secret": "",
          "created": 1691486661,
          "customer": null,
          "description": null,
          "flow_directions": null,
          "last_setup_error": null,
          "latest_attempt": null,
          "livemode": false,
          "mandate": null,
          "metadata": {},
          "next_action": null,
          "on_behalf_of": null,
          "payment_method": "jsbdnkasdsd"
        }
      }
    ]
  }
  `;
  const requestSnippet = `
GET /v1/events

import stripe

stripe.api_key = "your_api_key"

events = stripe.Event.list(limit=3)
`;
  return (
    <div className=' '>
      <div className=' rounded-lg flex-col justify-start items-start gap-3'>
        {/* Request */}
        <RequestResponseCard
          method={'GET'}
          endpoint={'/v1/events'}
          codeSnippet={
            <pre className='flex-grow  py-0.5 flex'>
              <code className='h-16 relative'>
                <span className='text-blue-300 text-xs font-normal leading-tight'>
                  import
                </span>
                <span className='text-slate-50 text-xs font-normal leading-tight'>
                  {' '}
                  stripe
                  <br />
                  stripe
                </span>
                <span className='text-gray-400 text-xs font-normal leading-tight'>
                  .
                </span>
                <span className='text-slate-50 text-xs font-normal leading-tight'>
                  api_key{' '}
                </span>
                <span className='text-blue-300 text-xs font-normal leading-tight'>
                  =
                </span>
                <span className='text-green-300 text-xs font-normal leading-tight'>
                  &#34
                </span>
                <span className='text-slate-50 text-xs font-normal leading-tight'>
                  stripe
                </span>
                <span className='text-gray-400 text-xs font-normal leading-tight'>
                  .
                </span>
                <span className='text-slate-50 text-xs font-normal leading-tight'>
                  Event
                </span>
                <span className='text-gray-400 text-xs font-normal leading-tight'>
                  .
                </span>
                <span className='text-blue-300 text-xs font-normal leading-tight'>
                  list
                </span>
                <span className='text-gray-400 text-xs font-normal leading-tight'>
                  (
                </span>
                <span className='text-slate-50 text-xs font-normal leading-tight'>
                  limit
                </span>
                <span className='text-blue-300 text-xs font-normal leading-tight'>
                  =
                </span>
                <span className='text-orange-300 text-xs font-normal leading-tight'>
                  3
                </span>
                <span className='text-gray-400 text-xs font-normal leading-tight'>
                  )
                </span>
              </code>
            </pre>
          }
        />
        <div className='mt-3'>
          <RequestResponseCard
            method={
              <div className='text-gray-400  text-xs font-medium uppercase tracking-tight'>
                Response
              </div>
            }
            endpoint={''}
            codeSnippet={<div className='w-min'>{codeSnippet}</div>}
          />
        </div>
      </div>
    </div>
  );
};
export default StripeCard;

const RequestResponseCard = ({ method, endpoint, codeSnippet }: any) => {
  const languages = ['Python', 'JavaScript', 'Java', 'C#'];
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  return (
    <div className='bg-gray-500 rounded-lg shadow flex-col justify-start flex'>
      <div className='p-1 bg-[#3C4257] rounded-tl-lg rounded-tr-lg justify-between items-center flex'>
        <div className='pl-3 pr-4 py-2 flex justify-start gap-2 items-start'>
          <div className='text-blue-300 text-xs font-normal cursor-pointer'>
            {method}
          </div>
          <div className='text-gray-300 text-xs font-normal'>{endpoint}</div>
        </div>
        {method === 'GET' && (
          <div className='pr-5 sm:pl-8 flex justify-center items-center'>
            <div className='absolute mt-40'>
              {showLanguages && (
                <div className='bg-gray-600 p-2 flex flex-col gap-2'>
                  {languages.map((language, index) => (
                    <button
                      key={index}
                      className='text-left text-gray-300 text-xs hover:text-white cursor-pointer'
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='h-5 gap-3 flex cursor-pointer justify-end items-center'>
              <div
                className='flex gap-2 items-center'
                onClick={toggleLanguages}
              >
                <div className='text-right text-slate-300 text-xs font-medium leading-tight cursor-pointer'>
                  {selectedLanguage}
                </div>
                <TiFlowSwitch />|
                <div>
                  <GrTechnology />
                </div>
                |
                <div className=''>
                  <AiOutlineCopy />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='pt-3 pb-2 bg-[#2A2F45] rounded-bl-lg rounded-br-lg justify-start items-start flex'>
        <pre className='flex-grow shrink basis-0 pl-3 pr-5 sm:pr-14 py-0.5 flex'>
          <code className='relative'>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};
