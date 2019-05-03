import React from 'react';
import profileImg from '@images/oval@2x.png';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import imagery from '@images/music-page-gradient-2@3x.png';

const Artist = ({ match: { path } }) => {
  console.log(path);
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="flex ">
          <div className="mr-10" style={{ maxWidth: '200px', width: '100%' }}>
            <div
              className="mb-6"
              style={{
                width: '200px',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '100%',
              }}>
              <img src={profileImg} alt="profile image" />
            </div>
            <div className="mb-8 text-center">
              <p className="text-2xl uppercase leading-normal">martin garrix</p>
              <p className="text-base text-tirques font-arial tracking-wide">
                DJ / Record Producer
              </p>
            </div>

            <div>
              <Link to={`${path}/requests`} className="block mb-2">
                <button
                  className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                  style={{ width: '200px' }}>
                  events
                </button>
              </Link>

              <Link to={`${path}/requests/experiences`} className="block mb-2">
                <button
                  className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                  style={{ width: '200px' }}>
                  Experiences
                </button>
              </Link>

              <Link to={`${path}/requests/merchandise`} className="block mb-2">
                <button
                  className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                  style={{ width: '200px' }}>
                  Merchandise
                </button>
              </Link>

              <Link className="block mb-2">
                <button
                  className="uppercase text-black border rounded border-tirques bg-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                  style={{ width: '200px' }}>
                  Talent access
                </button>
              </Link>
            </div>
          </div>

          <div className="px-12" style={{ maxWidth: '600px', width: '100%' }}>
            <Tabs>
              <TabList className="mb-8">
                <Tab>Partnership information</Tab>
                <Tab>Guidelines</Tab>
                <Tab>Toolkits</Tab>
                <Tab>Tour Schedule</Tab>
              </TabList>

              <TabPanel>
                <div className="font-arial leading-tight">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Urna condimentum mattis. <br /> <br /> Pellentesque
                    id nibh tortor. Lorem ipsum dolor sit amet consectetur
                    adipiscing elit ut aliquam. Mollis aliquam ut porttitor leo
                    a diam.
                    <br /> <br />
                    Lacinia at quis risus sed vulputate odio. Semper auctor
                    neque vitae tempus quam pellentesque nec nam. Congue nisi
                    vitae suscipit tellus mauris a diam maecenas sed. Pharetra
                    diam sit amet nisl suscipit adipiscing. Tortor at auctor
                    urna nunc id.
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>content 2</div>
              </TabPanel>
              <TabPanel>
                <div>content 3</div>
              </TabPanel>
              <TabPanel>
                <div>content 4</div>
              </TabPanel>
            </Tabs>
          </div>

          <div
            className="border-l-2 border-solid border-tirques pl-12 ml-6"
            style={{ maxWidth: '330px', width: '100%' }}>
            <h2 className="text-4xl mb-4">Asset Hub</h2>

            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="" style={{ fontWeight: '500' }}>
                    PR &amp; Imagery
                  </span>
                  <Link>
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
                  <Link>
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
                  <Link>
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
                className="uppercase underline text-tirques text-2xl"
                style={{ fontWeight: '500' }}>
                view all assets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
