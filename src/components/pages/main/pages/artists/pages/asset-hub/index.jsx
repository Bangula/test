import React from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import MediaLibrary from '@components/MediaLibrary/MediaLibrary';
import { Redirect } from 'react-router-dom';

const AssetHub = ({ match, data, fetchData }) => {
  const mediaLibData = {};
  mediaLibData['pr-and-imagery'] = data.folders.data.filter(
    folder => folder.name === 'Pr & Imagery',
  )[0];
  mediaLibData['assets'] = data.folders.data.filter(
    folder => folder.name === 'Assets',
  )[0];
  mediaLibData['in-store-material'] = data.folders.data.filter(
    folder => folder.name === 'In-store material',
  )[0];
  const manageSectionUrl = '/artists/artist/manage';
  return (
    <div>
      {match.isExact ? <Redirect to={`${match.url}/pr-and-imagery`} /> : null}
      <div className="mb-4">
        <PrimaryTitle>Asset hub</PrimaryTitle>
      </div>
      <MediaLibrary
        fetchData={fetchData}
        baseUrl={match.url}
        data={mediaLibData}
        manageSectionUrl={manageSectionUrl}
      />
    </div>
  );
};

export default AssetHub;
