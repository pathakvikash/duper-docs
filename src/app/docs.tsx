'use client';
import React, { useState } from 'react';
import StripeCard from './components/StripCard';
import ExpandableList from './components/ExpandList';

export default function DocsPage() {
  return (
    <div className='flex flex-col md:flex-row bg-[#1A1F36] text-white'>
      <div className='m-3 md:w-'>
        <div className='mlist'>
          <hr className='my-3' />
          <h1 className='text-2xl font-medium'>List all events</h1>
          <p className='mt-5 font-normal text-gray-300'>
            List events, going back up to 30 days. Each event data is rendered
            according to Stripe API version at its creation time, specified in
            event object api_version attribute (not according to your current
            Stripe API version or Stripe-Version header).
          </p>
        </div>
        <div className='mlist mt-5'>
          <h1 className=''> Parameters</h1>
          <hr className='my-3' />
          <div className='flex gap-3'>
            <p>types</p>
            <p className='text-gray-300'>optional</p>
          </div>
          <p className='mt-5 text-gray-300'>
            An array of up to 20 strings containing specific event names. The
            list will be filtered to include only events with a matching event
            property. You may pass either type or types, but not both.
          </p>
        </div>
        <div className='mlist'>
          <ExpandableList />
        </div>
        <div className='mlist mt-5'>
          <h1 className=''> Returns</h1>
          <hr className='my-3' />
          <p className='mt-5 text-gray-300'>
            A dictionary with a data property that contains an array of up to
            limit events, starting after event starting_after. Each entry in the
            array is a separate event object. If no more events are available,
            the resulting array will be empty.{' '}
          </p>
        </div>
      </div>
      <div className='codeExamples m-3 '>
        <StripeCard />
      </div>
    </div>
  );
}
