import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';

import nodejsIcon from '@iconify/icons-logos/nodejs';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = 'images/' + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: 'auto' }}>
                  <img src={profilepic} alt="Picture of me" />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={nodejsIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: 'auto',
                      fontSize: '132%',
                      lineHeight: '200%',
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

//import mongodbIcon from '@iconify/icons-logos/mongodb';

{
  /* <Icon
icon={mongodbIcon}
style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
/> */
}

// <div className={{ display: 'inline' }}>
// <img
//   className={{ display: 'inline' }}
//   alt="svgImg"
//   src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjN2NiMzQyIiBkPSJNMzcuMjE2LDExLjc4Yy0wLjAyMy0wLjIxMS0wLjIxMS0wLjMwNS0wLjM1MS0wLjMwNXMtMy4yMS0wLjIzNC0zLjIxLTAuMjM0cy0yLjEzMi0yLjEzMi0yLjM5LTIuMzQzCWMtMC4yMzQtMC4yMzQtMC42OC0wLjE2NC0wLjg2Ny0wLjExN2MtMC4wMjMsMC0wLjQ2OSwwLjE0MS0xLjE5NSwwLjM3NWMtMC43MjYtMi4wODYtMS45NjgtMy45ODQtNC4xOTQtMy45ODRoLTAuMjExCUMyNC4xODcsNC4zNzUsMjMuMzkxLDQsMjIuNzM1LDRjLTUuMTU1LDAtNy42MzksNi40NDQtOC40MTIsOS43MjVjLTIuMDE1LDAuNjMzLTMuNDQ1LDEuMDU0LTMuNjA5LDEuMTI1CWMtMS4xMjUsMC4zNTEtMS4xNDgsMC4zNzUtMS4yODksMS40MjljLTAuMTE3LDAuNzk3LTMuMDQ2LDIzLjQ1Ni0zLjA0NiwyMy40NTZMMjkuMTc5LDQ0bDEyLjM3My0yLjY3MQlDNDEuNTc1LDQxLjI4MiwzNy4yNCwxMS45OTEsMzcuMjE2LDExLjc4eiBNMjcuOTM3LDkuNDgzYy0wLjU2MiwwLjE2NC0xLjI0MiwwLjM3NS0xLjkyMSwwLjYwOVY5LjY3MQljMC0xLjI2NS0wLjE2NC0yLjI5Ni0wLjQ2OS0zLjExN0MyNi43MTgsNi42OTUsMjcuNDQ1LDcuOTg0LDI3LjkzNyw5LjQ4M0wyNy45MzcsOS40ODN6IE0yNC4xMTcsNi44MTIJYzAuMzA1LDAuNzk3LDAuNTE2LDEuOTIyLDAuNTE2LDMuNDY4djAuMjM0Yy0xLjI2NSwwLjM5OC0yLjYwMSwwLjc5Ny0zLjk4NCwxLjI0MkMyMS40MjIsOC44MDQsMjIuODk5LDcuMzUxLDI0LjExNyw2LjgxMglMMjQuMTE3LDYuODEyeiBNMjIuNjE3LDUuMzU5YzAuMjM0LDAsMC40NjksMC4wOTQsMC42NTYsMC4yMzRjLTEuNjY0LDAuNzczLTMuNDIxLDIuNzE4LTQuMTQ4LDYuNjU1CWMtMS4xMDEsMC4zNTEtMi4xNTYsMC42NTYtMy4xNjMsMC45ODRDMTYuODA2LDEwLjIzMywxOC45MTUsNS4zNTksMjIuNjE3LDUuMzU5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1NThiMmYiIGQ9Ik0zNi44NjUsMTEuNDI4Yy0wLjE0MSwwLTMuMjEtMC4yMzQtMy4yMS0wLjIzNHMtMi4xMzItMi4xMzItMi4zOS0yLjM0MwlDMzEuMTcsOC43NTcsMzEuMDUzLDguNzEsMzAuOTYsOC43MUwyOS4yNDksNDRsMTIuMzczLTIuNjcxYzAsMC00LjMzNS0yOS4zMzgtNC4zNTktMjkuNTQ5CUMzNy4xNjksMTEuNTY5LDM3LjAwNSwxMS40NzUsMzYuODY1LDExLjQyOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQuNzkyLDE4LjU5M2wtMS40NzUsNC40NDljMCwwLTEuMzM3LTAuNzE1LTIuOTI3LTAuNzE1Yy0yLjM3NCwwLTIuNDg5LDEuNDk4LTIuNDg5LDEuODY3CWMwLDIuMDI4LDUuMzAxLDIuODEyLDUuMzAxLDcuNTgzYzAsMy43NTctMi4zNzQsNi4xNzctNS41NzgsNi4xNzdjLTMuODcyLDAtNS44MDgtMi4zOTctNS44MDgtMi4zOTdsMS4wMzctMy40MTEJYzAsMCwyLjAyOCwxLjc1MiwzLjczNCwxLjc1MmMxLjEyOSwwLDEuNTktMC44NzYsMS41OS0xLjUyMWMwLTIuNjUxLTQuMzMzLTIuNzY2LTQuMzMzLTcuMTQ1YzAtMy42NjUsMi42MjgtNy4yMTQsNy45NTItNy4yMTQJQzIzLjc3NywxNy45OTQsMjQuNzkyLDE4LjU5MywyNC43OTIsMTguNTkzeiI+PC9wYXRoPjwvc3ZnPg=="
// />
// </div>
