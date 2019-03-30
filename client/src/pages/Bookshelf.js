import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Row, Container, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Bookshelf extends Component {
    state = {
        books: [],
        search: "",
        id: "",
        title: "",
        description: "",
        synopsis: "",
        thumbnail: "",
        author: "",
        link: "",
        saveState: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };


    //deleteBook Method

    deleteBook = id => {
        API.deleteBook(id)
            .then(() => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>
                    <h5>Search for and Save Books of Interest</h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h3>No books to display</h3>
                            ) : (
                                    <List>
                                        {this.state.books.map(book => (
                                            <ListItem
                                                key={book.bookId}
                                                id={book.bookId}
                                                title={book.title}
                                                description={(!book.description) ? <p></p> : book.description}
                                                author={(!book.author) ? "No Author Available" : book.author}
                                                link={book.link}
                                                thumbnail={book.thumbnail}
                                                synopsys={book.synopsys}
                                                saveState = {book.saveState}
                                                saveBook={this.saveBook}
                                                deleteBook={this.deleteBook}
                                            >
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bookshelf;
