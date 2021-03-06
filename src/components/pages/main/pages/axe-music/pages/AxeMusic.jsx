import React from 'react';
import CardLink from '../components/CardLink';
import AxeMusicHeader from '../components/AxeMusicHeader';
import { Link } from 'react-router-dom';

const AxeMusic = () => {
  let sectionContent = null;
  const cards = [
    {
      type: 'with-text',
      title: 'Brand assets',
      text: `Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    { type: 'with-image', label: 'Logos', image: '', path: '/axe-music/logos' },
    { type: 'with-image', label: 'Fonts', image: '', path: '/axe-music/fonts' },
    {
      type: 'with-image',
      label: 'Creative assets',
      image: '',
      path: '/axe-music/creative-assets',
    },
    {
      type: 'with-text',
      title: 'Media library',
      text: `Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      type: 'with-image',
      label: 'Pr & Imagery',
      image: '',
      path: '/axe-music/media-library/pr-and-imagery',
    },
    {
      type: 'with-image',
      label: 'Assets',
      image: '',
      path: '/axe-music/media-library/assets',
    },
    {
      type: 'with-image',
      label: 'Toolkits',
      image: '',
      path: '/axe-music/media-library/in-store-material',
    },
  ];
  sectionContent = cards.map((card, index) => {
    let content = null;
    if (card.type === 'with-text') {
      content = (
        <div>
          <h1 className="uppercase font-bebas text-tirques mb-5">
            {card.title}
          </h1>
          <p className="leading-tight font-arial">{card.text}</p>
        </div>
      );
    } else {
      content = (
        <div style={{ paddingTop: '4rem' }}>
          <Link to={card.path}>
            <CardLink image={card.image} label={card.label} />
          </Link>
        </div>
      );
    }
    return (
      <div className="px-3 pb-5 mb-5" key={index} style={{ flexBasis: '25%' }}>
        {content}
      </div>
    );
  });
  return (
    <div className="mx-auto container pt-5">
      <AxeMusicHeader fullContent={false} />
      <section style={{ paddingBottom: '4rem' }} className="flex flex-wrap">
        {sectionContent}
      </section>
    </div>
  );
};

export default AxeMusic;
