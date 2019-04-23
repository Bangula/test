import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import girlBcg from '@images/group.png';
import musicGradientPage from '@images/music-page-gradient-2@3x.png';

const component = props => {
  return (
    <div className="flex">
      <div className="inline-block pt-5" style={{ marginBottom: '9rem' }}>
        <div className="relative">
          <img src={girlBcg} alt="Girl leaning against the wall" />
          <div
            className="absolute pin-r"
            style={{
              right: '-6rem',
              bottom: '-6rem',
            }}>
            <div className="flex justify-end">
              <h1
                className="uppercase font-bebas mb-5"
                style={{
                  fontSize: '76px',
                  lineHeight: '.88',
                }}>
                Axe
                <br />
                Music
              </h1>
            </div>
            <img
              src={musicGradientPage}
              alt="Girl leaning against the wall"
              style={{
                width: '324px',
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="flex-1"
        style={{ paddingLeft: '9rem', paddingTop: '9rem' }}>
        <h1 className="uppercase text-tirques font-bebas mb-5">
          Axe music introduction
        </h1>
        <p className="font-arial leading-tight mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="font-arial leading-tight mb-5">
          Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {!props.match.isExact ? (
          <>
            <p className="font-arial leading-tight mb-5">
              Convallis convallis tellus id interdum velit laoreet id donec.
              Enim nec dui nunc mattis enim ut. Purus sit amet luctus venenatis
              lectus magna fringilla. Ultricies mi eget mauris pharetra et. Diam
              donec adipiscing tristique risus nec feugiat in fermentum.
            </p>
            <p className="font-arial leading-tight mb-5">
              Blandit libero volutpat sed cras ornare arcu dui vivamus. Proin
              sed libero enim sed. Odio ut sem nulla pharetra diam sit amet.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Eu turpis egestas pretium aenean pharetra magna ac.
            </p>
            <p className="font-arial leading-tight">
              Odio ut enim blandit volutpat maecenas volutpat. Dignissim
              suspendisse in est ante in nibh mauris.
            </p>
          </>
        ) : (
          <Link
            to={`${props.match.url}/introduction`}
            className="text-tirques text-lg">
            Read More &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(component);
