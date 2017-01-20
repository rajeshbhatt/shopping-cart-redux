/*
 *
 * Account
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAccount from './selectors';
import messages from './messages';

export class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.yourAccount} />
        <ul>
          <li>
            <FormattedMessage {...messages.yourOrder} />
          </li>
          <li>
            <FormattedMessage {...messages.returnedOrder} />
          </li>
          <li>
            <FormattedMessage {...messages.exchangedOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

Account.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Account: makeSelectAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
