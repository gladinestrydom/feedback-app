import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
