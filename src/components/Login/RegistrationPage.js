import React, {Component} from 'react';
import {Header, Icon, Grid, Segment, Button, Divider} from 'semantic-ui-react';

class RegistrationPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'>
            <Icon name='user plus'/>
            <Header.Content>
              Create a new account for more services and benefits
            </Header.Content>
          </Header>
          <Divider/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment attached='top'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='user outline' circular/>
              Customers
              <Header.Subheader>For users to access company information from the website.</Header.Subheader>
            </Header>
          </Segment>
          <Button attached='bottom' content='Register Now'/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment attached='top'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular/>
              Companies
              <Header.Subheader>For companies to post their information on the website.</Header.Subheader>
            </Header>
          </Segment>
          <Button attached='bottom' content='Register Now'/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegistrationPage;