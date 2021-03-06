import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";



// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  console.log(props)
  return (
    <li className="list-group-item">
      <Container>
        <Row>
        <Col size="xs-12 sm-12 md-9">
        <h5>{props.title}</h5>
        <p><span className="badge badge-pill badge-info">{props.author}</span></p>
        
        </Col>
        <Col size="xs-12 sm-12 md-3">
        {/* Button for View and Button for Save */}
        <a
              className="btn btn-primary float-right"
              rel="noreferrer noopener"
              target="_blank"
              href={props.link}
            >
              view
            </a>
            {(props.saveState === undefined) ? <button
              className="btn btn-success float-right mr-3"
              onClick={ e => props.saveBook(props.id, props.title, props.description, props.author, props.link, props.synopsys, props.thumbnail)}
            >
              Save
            </button> : 
            <button className="btn btn-danger float-right mr-3" onClick={() => props.deleteBook(props.id)}>
            delete
            </button>
          }
            
            </Col>
        </Row>
        <Row>
          <Col size="xs-12 sm-12 md-3">
          <img alt={props.title} src={props.thumbnail || "https://via.placeholder.com/150"} />
          </Col>
          <Col size="xs-12 sm-12 md-9">
            { props.synopsys ? <p>Synopsis: {props.synopsys}</p> : <p>No Synopsis Available</p>}
            
            
          </Col>
        </Row>
      </Container>
    </li>
  );
}