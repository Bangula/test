import React from 'react';
import { Link } from 'react-router-dom';

const MediaPreview = ({ match, data }) => {
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
  const mediaDataKeys = Object.keys(mediaLibData);
  console.log(mediaLibData);
  return (
    <div>
      <h2 className="text-4xl mb-4">Asset Hub</h2>
      {mediaDataKeys.map(key => (
        <div key={mediaLibData[key].id} className="mb-8">
          <div className="flex justify-between mb-2">
            <h3>{mediaLibData[key].name}</h3>
            <Link to={`${match.url}/asset-hub/${key}`}>
              <span>
                <i className="fas fa-arrow-right text-tirques" />
              </span>
            </Link>
          </div>
          <div>
            {mediaLibData[key].files.data.length ? (
              <div className="flex flex-wrap">
                {mediaLibData[key].files.data.map(file => (
                  <div
                    className="bg-cover w-16 h-16 mr-2 mb-2"
                    style={{ backgroundImage: `url(${file.url})` }}
                  />
                ))}
              </div>
            ) : (
              <p className="font-arial">No files.</p>
            )}
          </div>
        </div>
      ))}
      <Link
        to={`${match.url}/asset-hub`}
        className="uppercase underline text-tirques text-2xl font-bold">
        view all assets
      </Link>
      {/* <div>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="" style={{ fontWeight: '500' }}>
              PR &amp; Imagery
            </span>
            <Link to={`${match.url}`}>
              <span>
                <i className="fas fa-arrow-right text-tirques" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap">
            {Array(10).fill(
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 5px 5px 0',
                }}>
                <img
                  src={imagery}
                  alt=""
                  style={{ objectFit: 'fill', height: '100%' }}
                />
              </div>,
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="" style={{ fontWeight: '500' }}>
              PR &amp; Imagery
            </span>
            <Link to={`${match.url}`}>
              <span>
                <i className="fas fa-arrow-right text-tirques" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap">
            {Array(3).fill(
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 5px 5px 0',
                }}>
                <img
                  src={imagery}
                  alt=""
                  style={{ objectFit: 'fill', height: '100%' }}
                />
              </div>,
            )}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-2">
            <span className="" style={{ fontWeight: '500' }}>
              PR &amp; Imagery
            </span>
            <Link to={`${match.url}`}>
              <span>
                <i className="fas fa-arrow-right text-tirques" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap">
            {Array(3).fill(
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 5px 5px 0',
                }}>
                <img
                  src={imagery}
                  alt=""
                  style={{ objectFit: 'fill', height: '100%' }}
                />
              </div>,
            )}
          </div>
        </div>

        <Link
          to={`${match.url}/asset-hub`}
          className="uppercase underline text-tirques text-2xl"
          style={{ fontWeight: '500' }}>
          view all assets
        </Link>
      </div> */}
    </div>
  );
};

export default MediaPreview;
