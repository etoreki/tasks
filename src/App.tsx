import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and Eric Toreki
            </header>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 className="App-header">Task 3</h1>
            <ul>
                <li>Add a header</li>
                <li>Add an image with alt text</li>
                <li>Add a list with at least 3 elements</li>
                <li>Change the background color of the header area</li>
                <li>Add a bootstrap button with the text: Log Hello World</li>
                <li>Make the button log: Hello World!: when clicked</li>
                <li>Have a 2 column layout on the page somewhere</li>
                <li>
                    Put a red rectangle in each column using a div tag with
                    width, height, and backgroundColor styles
                </li>
            </ul>
            <img
                src="https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png"
                alt="Image Unavailable"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Task
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Status
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Header with new background color
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Done
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Image with alt text
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Done
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            List with at least 3 elements
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Done
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Log Hellow World button
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Done
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            2 Column format with red rectangles
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{ border: "2px solid red", padding: "3px" }}
                        >
                            Done
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
