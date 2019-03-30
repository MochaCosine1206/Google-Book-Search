import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Row, Container, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        books: [],
        search: "",
        id: "",
        title: "",
        description: "",
        synopsys:"",
        thumbnail:"",
        author: "",
        link: "",
        saveState: ""
    };

    // componentDidMount() {
    //     this.loadBooks();
    // }

    // loadBooks = () => {
    //     API.getBooks()
    //         .then(res =>
    //             this.setState({ books: res.data, search: "" })
    //         )
    //         .catch(err => console.log(err));
    // };

    // SaveBooksMethod

    saveBook = (id, title, description, author, link, synopsys, thumbnail) => {
        API.saveBook({
            bookId: id, title: title, description: description, author: author, link: link, synopsys: synopsys, thumbnail: thumbnail, saveState: true
        }).then(res => {
            console.log(res.data);
        })
            .catch(err => console.log(err));
    }


    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.googlebooks(this.state.search)
            .then(res => {
                console.log(res.data)
                const { items } = res.data
                console.log(items);
                this.setState({ books: items })
                console.log(this.state.books)
            })
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
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                value={this.state.search}
                                                onChange={this.handleInputChange}
                                                name="search"
                                                placeholder="Enter Book Name Here (Required)"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <FormBtn
                                                disabled={!this.state.search}
                                                onClick={this.handleFormSubmit}
                                            >
                                                Search
                                            </FormBtn>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h3>No books to display</h3>
                            ) : (
                                    <List>
                                        {this.state.books.map(book => (
                                            <ListItem
                                                key={book.id}
                                                id={book.id}
                                                title={book.volumeInfo.title}
                                                description={(!book.searchInfo) ? <p></p> : book.searchInfo.textSnippet}
                                                author={(!book.volumeInfo.authors) ? "No Author Available" : book.volumeInfo.authors[0]}
                                                link={book.volumeInfo.infoLink}
                                                thumbnail={(!book.volumeInfo.imageLinks) ? "https://via.placeholder.com/150" : book.volumeInfo.imageLinks.thumbnail}
                                                synopsys={book.volumeInfo.description}
                                                saveState = {this.saveState}
                                                saveBook = {this.saveBook}
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

export default Search;
