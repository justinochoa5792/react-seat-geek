import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SearchResults = ({ searchResult }) => {
  console.log(searchResult.map((item) => item));

  return (
    <>
      {searchResult.length > 0 ? (
        <>
          <h1 className="m-2">Results</h1>
          <div className="py-3 card-container">
            {searchResult.map((item) => {
              return (
                <Card style={{ width: "16rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Title>{item.short_title}</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>{item.venue.address}</li>
                        <li>{item.venue.extended_address}</li>
                      </ul>
                    </Card.Text>
                    <Button variant="primary">
                      <a href={item.url} rel="noreferrer" target="_blank">
                        Get Tickets
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
