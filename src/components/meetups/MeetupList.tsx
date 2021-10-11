import React from 'react';
import { Meetup } from '../model/Meetup.model';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

type Props = {
  meetups: Meetup[]
}

const MeetupList: React.FC<Props> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
