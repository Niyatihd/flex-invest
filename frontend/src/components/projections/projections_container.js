import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import Projections from './projections';

const mapStateToProps = (state, ownProps) => ({
    projection: state.entities.projection,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projections));