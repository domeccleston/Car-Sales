import React from "react";

// (9) PLUG IN ACTION CREATORS: add in click handlers to trigger our action creators to buy and remove features.
// Since we passed down buyItem as a second argument to our connect() function in the parent component, we can
// call it directly here. If we had not specified a second argument, dispatch() would have been injected and
// passed down and we would have had to call dispatch and pass in our action creator as a callback.

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
