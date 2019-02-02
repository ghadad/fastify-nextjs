import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../components/Hello2.jsx"),
  {
    loading: () => <p>...</p>
  }
);

export default class extends React.Component {
  render() {
    return (
      <div>
        Hello UserAgent {JSON.stringify(this.props)}
        <DynamicComponentWithCustomLoading />
      </div>
    );
  }
}
