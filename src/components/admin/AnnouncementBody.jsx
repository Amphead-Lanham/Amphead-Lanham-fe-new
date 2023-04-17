import React from 'react';
import PropTypes from 'prop-types';

export default function AnnouncementBody({ bodyString }) {

  const bodyLines = bodyString.split('<br>').map((line, i) => {
    return line === 'blank_line'
      ? <div style={{ margin: '15px' }} key={`line_${i}`}></div>
      : <p key={`line_${i}`}>{line}</p>;
  });
  return (
    <div>
      {bodyLines}
    </div>
  );
}

AnnouncementBody.propTypes = {
  bodyString: PropTypes.string
};
