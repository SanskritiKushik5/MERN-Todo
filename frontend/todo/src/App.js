import './App.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import List from './list';

function App() {
    const [todo, setTodo] = useState({
        mytodo: ''
    });
    const [data, setData] = useState([]);
    
    useEffect(() => {
        loadData();
    }, [])
    const onInputChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/create', todo);
        setTodo({
            mytodo: '',
        });
        loadData();
    }
    
    const onDelete = async (e) => {
        e.preventDefault();
        var id = e.target.deleteId.value;
        await axios.delete(`http://localhost:8080/delete/${id}`);
        loadData();
    }
    const loadData = async () => {
        const result = await axios.get("http://localhost:8080/todos");
        setData(result.data);
    }
    return (
        <div className="app">
            <Container fluid>
                <Row>
                    <Col md="auto" style={{ margin: "5rem" }}>
                        <h2>Add your ToDos!!!</h2><br /><br />
                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Control onChange={e => onInputChange(e)} defaultValue={todo.mytodo} size="md" type="text" name="mytodo" placeholder="Add your ToDo!" /><br />
                            <Button variant="dark" type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col>
                        <Table class="table">
                            <tbody>
                                {data.map((todo) => (
                                    <List todo={todo} onDelete={onDelete} loadData={loadData}/>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
