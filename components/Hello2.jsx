import React from "react";

export default () => {
  const [userAgent, setUserAgent] = React.useState();
  React.useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  return <p>User Agent: {userAgent}</p>;
};
