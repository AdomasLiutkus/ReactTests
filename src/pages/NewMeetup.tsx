import React from 'react';
import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { MeetupData } from '../components/model/MeetupData.model';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData: MeetupData) {
    fetch(
      'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;