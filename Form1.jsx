import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
function BasicExample() {
  return (
    <center>
      <div class="align"></div>
   <Form
   style={{
    justifyContent:'center'
   }}>
   <Form.Group as={Col} md="3" controlId="validationCustom01">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
                    
      <Form.Group as={Col} md="3" controlId="validationCustom01">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="align-items-center" controlId="formBasicCheckbox">
        <Form.Check label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
    
  );
}

export default BasicExample;