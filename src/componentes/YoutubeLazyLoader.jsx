import React, { useState } from "react";
import PropTypes from "prop-types";

const YoutubeEmbedLazy = ({ embedId}) => {

    const [showVideo, setShowVideo] = useState(false)
    return (
        <>
        {showVideo ? 
        (<div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube-nocookie.com/embed/${embedId}?&autoplay=true `}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            loading="lazy"
            />
        </div>
        ) : ( 
        <button id="youtube-loader" aria-label="QA SEO Services Video" type="button" onClick={()=>{setShowVideo(true)}} className="border-0 p-0 bg-transparent thumb-button w-full rounded-lg lg:min-h-[65vh] min-h-[23vh] webkit-center" 
        style={{
            backgroundImage: `url(https://img.youtube.com/vi/${embedId}/maxresdefault.jpg)`}}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                    <path d="M43.7191 0.620117C19.9283 0.620117 0.619843 19.9286 0.619843 43.7193C0.619843 67.5101 19.9283 86.8186 43.7191 86.8186C67.5098 86.8186 86.8183 67.5101 86.8183 43.7193C86.8183 19.9286 67.5098 0.620117 43.7191 0.620117ZM35.0992 63.114V24.3247L60.9588 43.7193L35.0992 63.114Z" fill="white" fillOpacity='0.4'/>
                </svg>
            </button>
        )}
        </>
    )
};

YoutubeEmbedLazy.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedLazy;