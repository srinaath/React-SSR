import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps, oldProps) {
    if(nextProps.users !== oldProps.users) {
      
    }
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  
  render() {
    return (
      <div>
        <span>
          Here's a big list of users:
        </span>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  console.log('In users load data');
  return store.dispatch(fetchUsers());
}

export {loadData};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

