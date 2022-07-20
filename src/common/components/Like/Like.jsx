import "./Like.scss";

const Like = ({ onLikeClick, likeObj }) => {
  const {like, number} = likeObj
  
  const likeClickHandler = () => {
    if (onLikeClick) return onLikeClick();
  };
  
  return (
    <div className="like-container">
      <div className="like-icon" onClick={likeClickHandler}>
        <svg
          viewBox="-4 -8 42 42"
          className={`${like ? "liked back" : "back"}`}
        >
          <path
            d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
            stroke-width="5"
          />
        </svg>
        <svg
          viewBox="-4 -8 42 42"
          className={`${like ? "liked front" : "front"}`}
        >
          <path
            d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="like-count">{number}</div>
    </div>
  );
};

Like.defaultProps = {
  onLikeClick: null,
};

export default Like;
