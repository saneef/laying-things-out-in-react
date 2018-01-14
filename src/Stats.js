import React from "react";

import Stat from "./Stat";

export default () => {
  return (
    <div>
      <Stat label="Likes" value={290} />
      <Stat label="Views" value={2290} />
      <Stat label="Shares" value={39} />
    </div>
  );
};
