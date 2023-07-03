const MyBlog = ({
  avatar,
  heading,
  titleDescription,
  time,
  description,
  comment,
}) => {
  return (
    <div className="top">
      <div className="head">
        <img src={avatar} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="ban">
        <div className="inside">
          <h2>{heading}</h2>
          <br />
          <h3>
            {titleDescription}
            <span style={{ color: "#d2c0c0" }}>{time}</span>
          </h3>
          <br />
          <p>{description}</p>
        </div>
      </div>
      <div className="foot">
        <div className="read">READ MORE&gt;&gt;</div>
        <div className="comment">
          Comment{" "}
          <span style={{ background: "black", color: "white" }}>{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
