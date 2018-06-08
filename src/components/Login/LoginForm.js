import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Grid,
  Form,
  Button,
  Header,
  Icon,
  Divider
} from 'semantic-ui-react';

class LoginForm extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>

          <Grid.Column width={16}>
            <Header as='h2'>
              <Icon name='user'/>
              <Header.Content>
                Login
              </Header.Content>
            </Header>
            <Divider/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>ID</label>
                <input name="userid" type="text"/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name="password" type="password"/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={8}>
            <h3>Forgot your username/password?</h3>
            <Button basic as={Link} to="/find">
              Find username/password
            </Button>
            <h3>Don't have an account?</h3>
            <Button basic as={Link} to="/register">
              Create new account
            </Button>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginForm;