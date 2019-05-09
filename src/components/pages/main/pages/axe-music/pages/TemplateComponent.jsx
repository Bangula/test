import React from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { getFonts } from '@endpoints/music/fonts';
import { getCreativeAssets } from '@endpoints/music/creative-assets';
import { getLogos } from '@endpoints/music/logos';

const TemplateComponent = ({ match }) => {
  const defaultPageProps = {};
  switch (match.params.page) {
    case 'logos':
      defaultPageProps.page = 'Logos';
      defaultPageProps.getData = getLogos;
      break;
    case 'fonts':
      defaultPageProps.page = 'Fonts';
      defaultPageProps.getData = getFonts;
      break;
    case 'creative-assets':
      defaultPageProps.page = 'Creative Assets';
      defaultPageProps.getData = getCreativeAssets;
      break;
    default:
      break;
  }
  return <DefaultLayout {...defaultPageProps} />;
};

export default TemplateComponent;
