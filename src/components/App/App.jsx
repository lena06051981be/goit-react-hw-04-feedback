import Notification from '../Notification/Notification.jsx'
import Section from 'components/Section/Section.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  FeedbackOptions  from '../Feedback/Feedback.jsx'
import { useState } from 'react';

const App = () => {
// class App extends React.Component {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const ratingButtonClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    })); 
    console.log(item);
  };
 
  // ratingButtonClick = () => {this.setState({
  //   good: this.state.good + 33})};

  const countTotalFeedback = () => 
  Object.values(this.state).reduce((acc, value) => acc + value);

  const countPositiveFeedbackPercentage = () => 
  Math.round((good / countTotalFeedback()) * 100);

  // render() {
    // const { good, neutral, bad } = this.state;
    const positiveFeedback = countPositiveFeedbackPercentage();
    const totalFeedback = countTotalFeedback();

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.ratingButtonClick} 
          />
        </Section>

        <Section title="Statistics:">
          {totalFeedback ? ( 
              <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                PositivePercentage=
                {positiveFeedback ? positiveFeedback : 0 }
              />           
            ) : (    
              <Notification  message="There is no one feedback" />      
               )                          
          }          
        </Section>        
      </>
    )
  // } 
}


export default App

