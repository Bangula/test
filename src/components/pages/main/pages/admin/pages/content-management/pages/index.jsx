import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const ContentManagementStart = ({ match: { path } }) => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/3">
          <PrimaryTitle>Content Management</PrimaryTitle>
        </div>
        <div className="w-2/3" />
      </div>

      <div className="flex flex-row font-arial">
        <div className="w-1/3" />
        <div className="w-2/3">
          <p className="w-2/3">
            Lo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            eu augue ut lectus arcu.
          </p>

          <p className="my-8">Please select a type:</p>
          <div className="flex">
            <Link
              to={`${path}events`}
              className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl mr-5">
              Events
            </Link>{' '}
            <Link
              to={`${path}experiences`}
              className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl mr-5">
              Experiences
            </Link>
            <Link
              to={`${path}gifts-merch`}
              className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl">
              Gifts and Merch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagementStart;
