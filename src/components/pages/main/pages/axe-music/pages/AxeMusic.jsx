import React from 'react';
import { withRouter } from 'react-router-dom';
import CardLink from '../components/CardLink';
import IntroductionHeader from '../components/IntroductionHeader';
import gradient from '@images/axe-music-introduction-gradient.png';

const AxeMusic = props => {
  let sectionContent = null;
  if (props.match.isExact) {
    const cards = [
      {
        type: 'with-text',
        title: 'Brand assets',
        text: `Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      { type: 'with-image', label: 'Logos', image: '' },
      { type: 'with-image', label: 'Fonts', image: '' },
      { type: 'with-image', label: 'Creative assets', image: '' },
      {
        type: 'with-text',
        title: 'Media library',
        text: `Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      { type: 'with-image', label: 'Pr & Imagery', image: '' },
      { type: 'with-image', label: 'Assets', image: '' },
      { type: 'with-image', label: 'Toolkits', image: '' },
    ];
    sectionContent = cards.map((card, index) => {
      let content = null;
      if (card.type === 'with-text') {
        content = (
          <div>
            <h1 className="uppercase font-bebas text-tirques mb-5">
              {card.title}
            </h1>
            <p className="leading-tight">{card.text}</p>
          </div>
        );
      } else {
        content = (
          <div style={{ paddingTop: '4rem' }}>
            <CardLink image={card.image} label={card.label} />
          </div>
        );
      }
      return (
        <div
          className="px-3 pb-5 mb-5"
          key={index}
          style={{ flexBasis: '25%' }}>
          {content}
        </div>
      );
    });
  } else {
    sectionContent = (
      <>
        <h1 className="uppercase text-5xl font-bebas my-5 py-5 text-tirques">
          Eu turpis egestas pretium aenean pharetra magna
          <br />
          ac. Odio ut enim blandit volutpat maecenas.
        </h1>
        <div className="flex">
          <div className="flex-1">
            <p className="leading-tight mb-5">
              Quam quisque id diam vel quam elementum. Ante in nibh mauris
              cursus mattis molestie a iaculis. Egestas egestas fringilla
              phasellus faucibus scelerisque eleifend.
            </p>
            <p className="leading-tight mb-5">
              Ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit
              amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
            </p>
            <p className="leading-tight mb-5">
              Feugiat sed lectus vestibulum mattis ullamcorper velit.
              Pellentesque elit eget gravida cum sociis natoque. Cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque mauris. Aliquam
              eleifend mi in nulla posuere. Leo urna molestie at elementum.
              Augue mauris augue neque gravida in fermentum. Eget est lorem
              ipsum dolor. Id venenatis a condimentum vitae sapien pellentesque
              habitant morbi.
            </p>
            <p className="leading-tight mb-5">
              Sagittis vitae et leo duis. Aliquam faucibus purus in massa. Quam
              elementum pulvinar etiam non. Luctus accumsan tortor posuere ac ut
              consequat semper viverra nam.
            </p>
            <p className="leading-tight mb-5">
              Scelerisque eu ultrices vitae auctor eu. Purus faucibus ornare
              suspendisse sed nisi lacus sed viverra. Amet dictum sit amet justo
              donec. Auctor elit sed vulputate mi sit amet mauris. Id porta nibh
              venenatis cras sed felis eget. Tempus quam pellentesque nec nam
              aliquam sem.
            </p>
            <p>
              At risus viverra adipiscing at in. In nulla posuere sollicitudin
              aliquam ultrices sagittis orci a scelerisque. Egestas diam in arcu
              cursus euismod quis viverra nibh.
            </p>
          </div>
          <div className="flex-1 pl-5">
            <div className="relative">
              <div style={{ height: '350px' }} className="bg-grey-darker" />
              <div
                className="absolute"
                style={{ top: '6rem', right: '-6rem', zIndex: '-1' }}>
                <img src={gradient} alt="Axe Music Introduction Gradiend" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="mx-auto container pt-5">
      <IntroductionHeader />
      <section style={{ paddingBottom: '4rem' }} className="flex flex-wrap">
        {sectionContent}
      </section>
    </div>
  );
};

export default withRouter(AxeMusic);
