import React, { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Sections from './Sections';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import { showAdminFeatures } from '@state/user/selectors';
import { withRouter } from 'react-router';
import NewFolder from '@components/NewFolder/NewFolder';
import { addSection } from '@endpoints/music/sections';

const mapStateToProps = state => {
  return {
    showAdminFeatures: showAdminFeatures(state),
  };
};

const DefaultLayout = ({ getData, page, showAdminFeatures, ...props }) => {
  const [data, setData] = useState({});
  const [newSectionModal, toggleNewSectionModal] = useState(false);
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

  const closeModal = () => {
    toggleNewSectionModal(false);
  };
  const onAddFolder = async name => {
    let { page: section } = props.match.params;
    if (section.includes('assets')) {
      section = 'assets';
    }
    const response = await addSection(section, { name });
    if (!response.error) {
      const newData = { ...data };
      const sections = {
        data: [...newData.sections.data, response.data.data.data],
      };
      newData.sections = sections;
      setData(newData);
      closeModal();
    }
  };
  return (
    <div
      className="max-w-content mx-auto pt-4 px-4 md:flex"
      style={{ paddingBottom: '80px' }}>
      <div className="md:w-64 md:mr-10 sm:mb-4">
        <Aside varibleContent="To read more on the best practices when using the AXE music logos, visit the brand guidelines." />
      </div>
      <div className="flex-grow md:pl-10">
        <div className="mb-5 px-4 flex justify-between items-center">
          <div>
            <PrimaryTitle>{page}</PrimaryTitle>
          </div>
          {showAdminFeatures ? (
            <div>
              <button
                className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl"
                onClick={() => toggleNewSectionModal(true)}>
                <i className="fa fa-plus mr-4" />
                New section
              </button>
            </div>
          ) : null}
        </div>
        {data.sections && data.sections.data.length ? (
          <Sections
            sections={data.sections.data}
            object={data.object}
            adminFeatures={showAdminFeatures}
          />
        ) : (
          <p className="font-arial px-4 text-xl">You have no {page}.</p>
        )}
      </div>
      {showAdminFeatures ? (
        <NewFolder
          opened={newSectionModal}
          close={closeModal}
          onAddFolder={onAddFolder}
        />
      ) : null}
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(DefaultLayout));
