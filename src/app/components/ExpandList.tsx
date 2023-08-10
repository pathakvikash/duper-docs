'use client';
import React, { useState, useEffect } from 'react';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';
import { BiLink } from 'react-icons/bi';

const ExpandableList = () => {
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleExpandAllClick = () => {
    setAllExpanded(!allExpanded);
    setSelectedItem(null);
  };

  const optionsData = [
    {
      title: 'created',
      subTitle: '(Optional Directory)',
      details:
        'A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options.',
    },
    {
      title: 'do_sample',
      subTitle: '',
      details: 'Activate logits sampling',
    },
    {
      title: 'max_new_tokens',
      subTitle: '',
      details: 'Maximum number of generated tokens',
    },
    {
      title: 'repetition_penalty',
      subTitle: 'Optional',
      details: 'The parameter for repetition penalty. 1.0 means no penalty.',
    },
    {
      title: 'return_full_text',
      subTitle: 'Optional',
      details: 'Whether to prepend the prompt to the generated text',
    },
    {
      title: 'stop',
      subTitle: 'Optional',
      details:
        'Stop generating tokens if a member of `stop_sequences` is generated',
    },
    {
      title: 'seed',
      subTitle: 'Optional',
      details: 'Random sampling seed',
    },
    {
      title: 'temperature',
      subTitle: 'Optional ',
      details: 'The value used to module the logits distribution.',
    },
    {
      title: 'top_k',
      subTitle: 'Optional',
      details:
        ' The number of highest probability vocabulary tokens to keep for top-k-filtering.',
    },
    {
      title: 'top_p',
      subTitle: 'Optional',
      details:
        ' If set to < 1, only the smallest set of most probable tokens with probabilities that add up to `top_p` or higher are kept for generation.',
    },
    {
      title: 'truncate',
      subTitle: 'Optional',
      details: ' truncate inputs tokens to the given size',
    },
    {
      title: 'typical_p',
      subTitle: 'Optional ',
      details: 'Typical Decoding mass',
    },
    {
      title: 'best_of',
      subTitle: 'Optional',
      details:
        ' Generate best_of sequences and return the one if the highest token logprobs',
    },
    {
      title: 'watermark',
      subTitle: '',
      details:
        'Watermarking for Large Language Models (embedding signals into generated text)',
    },
    {
      title: 'details',
      subTitle: 'Get generation details',
      details: '',
    },
    {
      title: 'decoder_input_details',
      subTitle: '',
      details: 'Get decoder input token logprobs and ids',
    },
  ];

  return (
    <>
      <div className='p-3 mt-9 border-gray-700 flex w-full justify-between'>
        <div className='text-slate-50 text-base font-medium cursor-pointer'>
          {selectedItem ? 'Less parameters' : 'More parameters'}
        </div>
        <div
          className={`text-gray-400 text-xs font-normal cursor-pointer ${
            allExpanded ? '' : ''
          }`}
          onClick={handleExpandAllClick}
        >
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </div>
      </div>
      {optionsData.map((option, index) => (
        <OptionsHeader
          key={index}
          title={option.title}
          subTitle={option.subTitle}
          details={option.details}
          allExpanded={allExpanded}
        />
      ))}
    </>
  );
};

const OptionsHeader = ({ title, subTitle, details, allExpanded }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showChildParameters, setShowChildParameters] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(allExpanded);
  }, [allExpanded]);

  const handleShowChildParametersClick = () => {
    setShowChildParameters(!showChildParameters);
  };

  return (
    <div className='flex flex-col'>
      <hr className='border-gray-700  border-3' />
      <div
        className='options-header flex flex-col cursor-pointer'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='flex flex-col item-center p-3 '>
          <div className='flex items-center gap-1' onClick={toggleDetails}>
            <div className='text-[#647099]'>
              {isOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
            </div>
            <p>{title}</p>
            <p className='text-gray-400 text-xs'>{subTitle}</p>
            <div>{isHovering ? <BiLink /> : ''}</div>
          </div>
        </div>
        {isOpen && (
          <div className='p-3'>
            <p className='text-gray-400 text-xs font-medium'>{details}</p>
            {title === 'created' && (
              <button
                className='text-slate-200 mt-3 text-xs font-bold rounded-xl border p-1'
                onClick={handleShowChildParametersClick}
              >
                {showChildParameters
                  ? '- hide child parameters'
                  : '+ show child parameters'}
              </button>
            )}
            {showChildParameters && (
              <div className=' p-2'>
                <p className='text-gray-400 text-xs font-medium'>{details}</p>
                {title === 'created' && (
                  <button className='text-slate-200 mt-3 text-xs font-bold rounded-xl border p-1'>
                    + show child parameters
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableList;
