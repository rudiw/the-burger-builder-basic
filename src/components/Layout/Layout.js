import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import cssClasses from './Layout.css';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    onClickDrawerToggle={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.closeSideDrawer} />
                <main className={cssClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;