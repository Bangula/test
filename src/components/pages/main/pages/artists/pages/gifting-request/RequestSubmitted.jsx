import React from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { Link } from 'react-router-dom';

const GiftingRequestSubmitted = () => {
  return (
    <div style={{ minHeight: '500px' }}>
      <h2 className="text-tirques">Axe regimen gift set</h2>
      <div className="mb-8">
        <PrimaryTitle>Request Submitted</PrimaryTitle>
      </div>
      <p className="font-bold font-arial mb-4">
        Your gifting request has been submitted.
      </p>
      <p className="font-arial mb-8">
        You will have received an email confirming the submission of your
        request. To review, edit or track the status of your request, head to My
        Requests.
      </p>
      <div className="flex">
        <button className="uppercase border border-tirques text-white rounded px-6 pb-1 pt-2 tracking-wide text-xl mr-4">
          Back to Profile
        </button>
        <Link to="/requests">
          <button className="uppercase bg-tirques rounded px-6 pb-1 pt-2 tracking-wide text-xl">
            My Requests
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GiftingRequestSubmitted;
