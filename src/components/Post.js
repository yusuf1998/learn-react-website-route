import React, { Component, Fragment } from "react";
import { Badge } from "reactstrap";

class Post extends Component {
  state = {
    title: "Story Of My Life",
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit finibus ultrices. Mauris fermentum iaculis metus in finibus. Aenean ut lectus eget tellus rutrum faucibus. 
           Duis lacinia tellus quis dui lobortis, scelerisque egestas nisl sollicitudin. Sed at tellus tincidunt, ultrices enim non, porta odio. Donec non sodales urna. Donec pulvinar venenatis mi sed feugiat. 
           Praesent sed scelerisque diam. Aenean suscipit lacus augue, id elementum quam pulvinar maximus. Praesent a ornare ante. Nulla sed tortor ac metus convallis finibus vel quis tellus. Sed vitae congue ex. Donec neque urna, vestibulum a mollis dapibus,
           aliquam tempus dui. Aliquam pharetra dignissim est vitae dignissim. Praesent in eros massa. In ac ullamcorper nisl.
           Nullam quis sollicitudin sapien. Duis metus est, scelerisque vitae mi vitae, consequat iaculis 
           magna. Cras nunc dui, placerat vitae arcu non, dapibus dictum libero. Integer at orci iaculis, rhoncus lorem sit amet, vehicula odio. Nunc vehicula vestibulum dolor,
           in vehicula sem interdum nec. Phasellus sollicitudin efficitur nisl, sed ullamcorper erat 
           posuere eu. Vivamus sit amet pellentesque ligula. Aenean non malesuada nisl. Vestibulum vitae elit elit. Praesent dignissim non magna blandit pharetra.
           Vivamus in tortor sed turpis semper volutpat eu et tellus. Phasellus ultricies lacus nunc, 
           at dignissim tellus euismod at. Mauris porta non orci non sodales. Nunc lacinia tellus libero. 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ultricies odio a bibendum. Sed id leo quam.`
  };

  render() {
    return (
      <Fragment>
        <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Editor's Pick
            <Badge
              pill
              color="success"
              className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
              style={{ fontSize: "0.75rem" }}
            >
              New
            </Badge>
          </span>
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            {this.state.title}
          </span>
          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
          >
            {this.state.post}
          </article>
        </div>
      </Fragment>
    );
  }
}
export default Post;
