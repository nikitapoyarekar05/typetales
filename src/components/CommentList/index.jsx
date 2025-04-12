import Comment from "../Comment";

const CommentList = ({ comments }) => {
  return comments
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((comment) => <Comment key={comment.id} comment={comment} />);
};

export default CommentList;
