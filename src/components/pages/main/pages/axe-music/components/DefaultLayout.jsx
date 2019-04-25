import React, { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Sections from './Sections';
import ManageSection from '../components/ManageSection';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isAdmin: state.getIsAdmin,
  };
};

const DefaultLayout = ({ getData, page }) => {
  const [data, setData] = useState({});
  const [manageSection, toggleManageSectionState] = useState('');
  useEffect(() => {
    async function fetchResource() {
      const { error, data } = await getData();
      if (!error) {
        setData(data.data.data);
      } else {
        Alert.error(error.response.data.message);
      }
    }
    fetchResource();
  }, [getData]);
  let renderData = null;
  if (!manageSection) {
    renderData = (
      <div className="md:flex" style={{ paddingBottom: '80px' }}>
        <div className="md:w-64 md:mr-10 sm:mb-4">
          <Aside varibleContent="To read more on the best practices when using the AXE music logos, visit the brand guidelines." />
        </div>
        <div className="flex-grow md:pl-10">
          <div className="mb-5 px-4 flex justify-between items-center">
            <div>
              <PrimaryTitle>{page}</PrimaryTitle>
            </div>
            <div>
              <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
                <i className="fa fa-plus mr-4" />
                New section
              </button>
            </div>
          </div>
          {data.sections && data.sections.data.length ? (
            <Sections
              sections={data.sections.data}
              object={data.object}
              toggleManageSection={toggleManageSectionState}
            />
          ) : (
            <p className="font-arial px-4 text-xl">You have no {page}.</p>
          )}
        </div>
      </div>
    );
  } else {
    renderData = (
      <ManageSection
        toggleManageSection={toggleManageSectionState}
        section={manageSection}
      />
    );
  }
  return <div className="max-w-content mx-auto pt-4 px-4">{renderData}</div>;
};

export default connect(mapStateToProps)(DefaultLayout);
