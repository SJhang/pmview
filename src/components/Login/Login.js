import React, {Component} from 'react';
import {Grid, Form, Button} from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            Login
            <Form>
              <Form.Field>
                <label>Username</label>
                <input name="username" type="text"/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name="password" type="password"/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            Registration
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;