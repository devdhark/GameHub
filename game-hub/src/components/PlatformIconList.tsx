import React from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  platform: Platform;
}

const PlatformIconList = () => {
  return <div>PlatformIconList</div>;
};

export default PlatformIconList;
