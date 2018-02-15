import React, { Component } from 'react';

class HoneyBadger extends Component {
  render() {
    return (
      <div className="FSAbackground">
        <div className="row">
          <div className="col l7 m12">
            <h3>Honeybadger Editing</h3>
            <hr />
            <p>"For <em>literally</em> all of your writing endeavors (books, essays, short stories, papers for school, resumes, letters to the President, anonymous love letters, etc.), I cannot recommend Honeybadger Editing services highly enough. Professional work at a personal level with affordable prices."</p>
            <p>-Mark Garnett</p>
            <hr />
            <p>Facebook - <a href="https://www.facebook.com/editingbadger">editingbadger</a></p>
            <p>Twitter - <a href="https://twitter.com/editingbadger">@editingbadger</a></p>
            <p>Gmail - <a href="mailto:editingbadger@gmail.com">editingbadger@gmail.com</a></p>
          </div>
          <div className="col l5 m12">
            <img 
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/c11.7.187.187/p200x200/17757276_1475146552519573_7674930973478994129_n.png?oh=cbc27cf750a91548ffc38309f7985678&oe=5AD93F42" 
              style={{ width: '100%' }}
              className="FSA"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HoneyBadger;
