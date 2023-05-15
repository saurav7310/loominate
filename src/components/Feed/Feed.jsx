import "./feed.css";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="inputFeedContainer">
        <div className="inputFeed">
          <div className="inputInnerFeed">
            <span>Post Something...</span>
            <div className="plusIcon"></div>
          </div>
        </div>
        <div className="feedBtnContainer"></div>
      </div>
    </div>
  );
};

export default Feed;
