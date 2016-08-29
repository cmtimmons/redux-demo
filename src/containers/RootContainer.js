import React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {ReduxRouter} from 'redux-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
   primary1Color: "#03A9F4",
    primary2Color: "#0288D1",
    primary3Color: "#B3E5FC",
    accent1Color: "#FF4081",
    accent2Color: "FF4081",
    accent3Color: "FF4081"
  }
});

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