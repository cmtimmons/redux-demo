import React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {ReduxRouter} from 'redux-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import customStyles from '../styles/customStyles.css';
import muiTheme from '../styles/muiTheme';
injectTapEventPlugin();
export default class Root extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    render () {
        return (
            <div>
              <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={this.props.store}>
                    <div>
                        <ReduxRouter>
                            {routes}
                        </ReduxRouter>
                    </div>
                </Provider>
              </MuiThemeProvider>
            </div>
        );
    }
}