import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { buyItem } from "../actions/actionCreators";

// (8) EXPORT CONNECT VERSION OF COMPONENTS: import connect from react-redux and modify our default export to
// be two invocations of the connect function. The first invocation returns a wrapper component, so we invoke it
// again to pass in our React component. This wraps our component and injects the props we want. The first argument of the first
// invocation here is in the format (state => state): this injects both dispatch() (from the redux library)
// and every field in the global state. This is simpler, but not recommended since it triggers a rerender
// on every state change. Instead we should use mapStateToProps and specify what state we need.
//
// The second argument of the first invocation is the action creator { buyItem } we imported and which we need
// to pass down. 

const AdditionalFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              buyItem={props.buyItem}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  { buyItem }
)(AdditionalFeatures);
