import React from "react";
import MyImage from "../../my-image.jpg";
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

const EmailForm = () => (
  <FormGroup>
    <Label for="email">Email</Label>
    <Input
      type="email"
      name="email"
      id="email"
      onChange={() => Signin.handleEmailInput}
      placeholder="myemail@email.com"
    />
  </FormGroup>
);
const PassForm = () => (
  <FormGroup>
    <Label for="password">Password</Label>
    <Input
      type="password"
      name="password"
      id="password"
      placeholder="********"
    />
  </FormGroup>
);

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accountInserted: [
        {
          email: "yusufhabibi1998@gmail.com",
          password: "admintest",
          image: MyImage
        }
      ]
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
  }

  handleEmailInput = event => {
    alert(event.target.input);
    this.setState({ email: event.target.value });
  };
  handlePassInput = event => {
    this.setState({ password: event.target.value });
  };
  handleLogin = () => {};

  render() {
    return (
      <Container className="App my-5 py-5">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <Form className="form" onSubmit={this.handleLogin}>
                <Col>
                  <EmailForm />
                </Col>
                <Col>
                  <PassForm />
                </Col>
                <Button>Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    );
  }
}
export default Signin;
