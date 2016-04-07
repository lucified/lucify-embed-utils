
import React from 'react';
import IFrameEmbed from './iframe-embed';

export default class Example extends React.Component {

  render() {
    return (
      <div>
        <p>Embed of the towards Europe visualisation:</p>
        <p>
          <IFrameEmbed src='http://dev.lucify.com/embed/the-flow-towards-europe-updating/' />
        </p>
      </div>
    );
  }

}

Example.prototype.displayName = 'Example';
