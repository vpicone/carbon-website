import React from 'react';
import yaml from '../../data/status-icons/status-icons.yaml';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

import Warning from './light/warning.js';
import WarningOutline from './light/warning--outline.js';
import Misuse from './light/misuse.js';
import MisuseOutline from './light/misuse--outline.js';
import Error from './light/error.js';
import ErrorOutline from './light/error--outline.js';
import ErrorAlt from './light/error-alt.js';
// import ErrorAltOutline from './light/error-alt--outline.js'; // doesn't exist
import WarningInverted from './light/warning-inverted.js';
import WarningInvertedOutline from './light/warning-inverted--outline.js';
import WarningAlt from './light/warning-alt.js';
import WarningAltOutline from './light/warning-alt--outline.js';

const StatusIcons = ({ attention }) => {
  // const data = data[attention]
  console.log(yaml);
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Icon</StructuredListCell>
          <StructuredListCell head>Name</StructuredListCell>
          <StructuredListCell head>Token</StructuredListCell>
          <StructuredListCell head>Usage</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
            <StructuredListCell><Warning /><WarningOutline /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
            <StructuredListCell><Misuse /><MisuseOutline /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
            <StructuredListCell><Error /><ErrorOutline /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
            <StructuredListCell><ErrorAlt /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
            <StructuredListCell><WarningInverted /><WarningInvertedOutline /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
            <StructuredListCell><WarningAlt /><WarningAltOutline /></StructuredListCell>
            <StructuredListCell>Warning</StructuredListCell>
            <StructuredListCell>support-01</StructuredListCell>
            <StructuredListCell>Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum. Lorem ipsum dolor adipscing lorem ipsum.</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default StatusIcons;
