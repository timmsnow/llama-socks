import React from 'react';

class InstagramFeed extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: '<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/9426397f3458513e9a00770542c6637d.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>'}} />
    );
  }
}

export default InstagramFeed;