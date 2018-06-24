import React from 'react';
import './Table.css';
import moment from 'moment';

const Table = ({name: itemName, id: itemId, events}) => (
  <div>
    <h2 style={{textAlign: 'center'}}>Blockchain Record: {itemName}</h2>
    <h3 style={{textAlign: 'center'}}>ID: {itemId}</h3>
    <table class="Table" style={{marginTop: 20}}>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Event</th>
          <th>Place</th>
          <th>Company</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr>
            <td>{moment(event.isotime).format('MMMM Do YYYY, hh:mm:ss')}</td>
            <td>{event.name}</td>
            <td>{event.place}</td>
            <td>{event.company}</td>
            <td>{event.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table;