import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../components/Hello2.jsx"),
  {
    loading: () => <p>...</p>
  }
);

const DynamicCounter = dynamic(() => import("../../components/Counter.jsx"), {
  loading: () => <p>...</p>,
  ssr: false
});

export default class extends React.Component {
  render() {
    return (
      <div>
        Hello UserAgent {JSON.stringify(this.props)}
        <DynamicComponentWithCustomLoading />
        <DynamicCounter />
      </div>
    );
  }
}
