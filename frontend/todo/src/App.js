import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
    return (
        <div className="app">
            <Container fluid>
                <Row>
                    <Col md="auto" className="m-5">
                        <h2>Add your ToDos!!!</h2><br/><br/>
                        <form>
                            <Form.Control size="md" type="text" placeholder="Add your ToDo!" /><br/>
                            <Button variant="dark" type="submit">Submit</Button>
                        </form>
                    </Col>
                    <Col>
                    <p></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
