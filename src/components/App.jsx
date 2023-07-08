import React, { Component } from "react";
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification  from './Notification/Notification';




class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}
 leaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  
  countTotalFeedBack = () => {
    return Object.values(this.state).reduce((total, curr) => (total + curr))
    
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };
  render() {
    const { good, neutral, bad } = this.state
    const totalFeedBack = this.countTotalFeedBack()
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedBack);

    return (
      <>
       <Section title="Please leave feedback">
        <FeedbackOptions
           options={Object.keys(this.state)}
            leaveFeedback={this.leaveFeedback}

        />
         </Section>
           <Section title="Statistics">
            {totalFeedBack ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedBack}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          </Section>
      </>
    );
  }
}

export default App;
