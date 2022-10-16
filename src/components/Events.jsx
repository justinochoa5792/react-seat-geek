import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  const getEvent = async () => {
    let result = await Axios.get(
      `https://api.seatgeek.com/2/events?client_id=${process.env.REACT_APP_CLIENT_ID}`
    );
    setEvents(result.data.events);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Type</th>
            <th scope="col">Title</th>
            <th scope="col">Venue</th>
          </tr>
        </thead>
        <tbody>
          {events.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>
                  {item.venue.address},{item.venue.extended_address}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
