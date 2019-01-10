import React from "react";
import {
  Card,
  CardBody,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Signup extends React.Component {
  render() {
    return (
      <Container className="App my-5 py-5">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label for="fullname">Fullname</Label>
                    <Input
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="Input Your Fullname"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Age"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="myemail@email.com"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="myemail@email.com"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="********"
                    />
                  </FormGroup>
                </Col>
                <Button>Register</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    );
  }
}
export default Signup;
