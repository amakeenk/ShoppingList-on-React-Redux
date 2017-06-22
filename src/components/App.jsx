import React from 'react';
import CreateItem from '../containers/CreateItem'
import {Header} from '../components/Header'
import ListItems from '../containers/ListItems'
import MainMenu from '../containers/MainMenu'
import '../styles/App.less'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

export const App = (props) => {
    return (
        <MuiThemeProvider>
            <div id="app-wrapper">
                <Header />
                <div id="main-window-wrap">
                    <MainMenu />
                    <div id="createItem-listItem-wrap">
                        <CreateItem />
                        <ListItems />
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
};



