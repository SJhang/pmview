import React, {Component} from 'react';
import {
  Grid,
  Form,
  Button,
  Header,
  Icon,
  Divider
} from 'semantic-ui-react';

class FindForm extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>

          <Grid.Column width={16}>
            <Header as='h2'>
              <Icon name='user secret'/>
              <Header.Content>
                Find Username / Password
              </Header.Content>
            </Header>
            <Divider/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as='h3'>
              Find Username
            </Header>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input name="email" type="email"/>
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input name="username" type="text"/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as='h3'>
              Find Password
            </Header>
            <Form>
              <Form.Field>
                <label>ID</label>
                <input name="userid" type="text"/>
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input name="email" type="email"/>
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input name="username" type="text"/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}

export default FindForm;