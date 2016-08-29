import React from 'react';
import {connect} from 'react-redux';
import {push} from 'redux-router';
import { bindActionCreators } from 'redux';
export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {
        static propTypes = {
            isAuthenticated: React.PropTypes.bool.isRequired,
            location: React.PropTypes.object.isRequired,
            dispatch: React.PropTypes.func.isRequired
        }
        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }
    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.fetched
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}