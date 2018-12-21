import React from 'react'

function About(props) {
  return (
    <div>
      <h1 className="display-4">
          {/* Getting URI Params below as an example */}
          <span className="text-danger">{props.match.params.id} About </span> 
          {props.match.params.name ? props.match.params.name : "Us"}
      </h1>
    </div>
  )
}

export default About;
