import React from 'react';
import { withRouter } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';

import { getFonts } from '@endpoints/music/fonts';
import { getCreativeAssets } from '@endpoints/music/creative-assets';
import { getLogos } from '@endpoints/music/logos';

const TemplateComponent = ({ match }) => {
  const urlComponents = match.path.split('/');
  const page = urlComponents[urlComponents.length - 1];
  const defaultPageProps = {};
  switch (page) {
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

export default withRouter(TemplateComponent);
