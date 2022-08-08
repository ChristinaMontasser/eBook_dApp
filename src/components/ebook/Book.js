import React from "react";
import {Fragment} from 'react';

import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Book = ({ book, buy}) => {
  console.log("Book")

  const { ISBN, author_name, borrowPrice, borrowed, buyPrice, img, name, pubication_year, type} =
    book;
    //ISBN, buyPrice, name, type, , img, author_name, borrowPrice
  const triggerBuy = () => {
    buy(ISBN, buyPrice);
  };

  return (
       <Col key={ISBN}>
      <Card key={ISBN} className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{author_name}</span>
            <Badge bg="secondary" className="ms-auto">
              {pubication_year} Pubication Year
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={img} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="flex-grow-1 ">{type}</Card.Text>
          <Card.Text className="text-secondary">
            <span>{"Buy"}</span>
          </Card.Text>
          <Button
            variant="outline-dark"
            onClick={triggerBuy}
            className="w-100 py-3"
          >
            Buy for {utils.format.formatNearAmount(buyPrice)} NEAR
          </Button>
        </Card.Body>
        
      </Card>
    </Col>
   
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  buy: PropTypes.func.isRequired,
};

export default Book;