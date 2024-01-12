"use client";
import React from "react";
import ReactPlayer from "react-player";
export const FacebookPage = () => {
  return (
    <div className="gap-1 columns-3">
      <div className="liveFeed flex justify-center items-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJunoChurchOfChrist&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="400"
          height="500"
          allowFullScreen={true}
          data-show-posts="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="fbLink  flex justify-center items-center h-12">
        <iframe
          className="border-none overflow-hidden"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJunoChurchOfChrist&tabs=timeline&width=250&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="250"
          height="70"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>  
      </div>

      <ReactPlayer url="https://fb.watch/pwoC2nJEIZ/" controls facebook/>


      <div className="fbPosts">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJunoChurchOfChrist%2Fposts%2Fpfbid093wbEdvoget1bW7KRt95rokHuxrc3Ku1bQibu4LadpdUfDKkazeQ33dmnfuL7YaCl&show_text=true&width=500"
          width="500"
          height="201"
          className="border-none overflow-hidden"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
