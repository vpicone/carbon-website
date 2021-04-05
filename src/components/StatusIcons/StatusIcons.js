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
          <StructuredListCell>Name</StructuredListCell>
          <StructuredListCell>Token</StructuredListCell>
          <StructuredListCell>Usage</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

export default StatusIcons;
