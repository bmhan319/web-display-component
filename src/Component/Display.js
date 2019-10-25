import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <div className="display-wrapper">
        <div className="title-container">
          <h3 className="title">CATCH PHRASE OR SLOGAN <span className="title2">GOES HERE</span></h3>
        </div>
        <div className="viewport">
          <div className="col-container">
            <div className="col col1">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/102/400/300" alt="raspberries" />
              </div>
              <h4 className="col-title">Column Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Text1</h6>
                <p className="col-text2">Text2</p>
              </div>
            </div>
            <div className="col col2">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/239/400/300" alt="raspberries" />
              </div>
              <h4 className="col-title">Column Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Text1</h6>
                <p className="col-text2">Text2</p>
              </div>
            </div>
            <div className="col col3">
              <div className="col-image-container">
                <img className="col-image" src="https://picsum.photos/id/337/400/300" alt="raspberries" />
              </div>
              <h4 className="col-title">Column Title</h4>
              <p className="col-paragraph">Lorem ipsum dolor, sit amet consectetur psa modi omnis adipisicing elit. Aspernatur reprehenderit eius repellat harum, accusamus recusandae? Aspernatur quae beatae sunt eligendi ipsa modi omnis ad? Adipisci provident nesciunt psa modi omnis quos est rem.</p>
              <div className="col-text-container">
                <h6 className="col-text1">Text1</h6>
                <p className="col-text2">Text2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dots-container">
          <div className="dots dots1"></div>
          <div className="dots dots2"></div>
          <div className="dots dots3"></div>
        </div>
        <button className="button" type="button">Read More</button>
      </div>
    )
  }
}

export default Display;