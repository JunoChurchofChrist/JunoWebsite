import React from "react";
import { FacebookPage } from "./components/facebookPostWatcherCard";
import CenterText from "../components/CenterText";


const MediaPage = () => {
  return (
    <>
      <div className="title flex justify-center items-center">
        <p className="text-4xl">Media</p>
      </div>
      <CenterText>
        <hr className="w-5/6 justify-center items-center py-12" />
      </CenterText>
      <FacebookPage />
    </>
  );
};

export default MediaPage;
