import PropTypes from 'prop-types';

function FeedBackStats({ feedback }) {
  // Calculate rating average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedBackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedBackStats;
