import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setFilter} from '../actions/filterActions'
import {deleteAll, deleteIsBought} from '../actions/purchaseActions'
import '../styles/MainMenu.less'
import {ShowAllIcon, ShowIsBoughtIcon, ShowNotBoughtIcon, DeleteIsBoughtIcon, DeleteAllIcon} from '../components/Icons';

class MainMenu extends React.Component {
    renderCount() {
        const isBoughtItems = this.props.purchase.filter(item => item.isBought === true);
        return (
            <div id="count-items">
                <p>Количество купленного: {isBoughtItems.length}</p>
                <p>Всего элементов: {this.props.purchase.length}</p>
            </div>
        )
    }


    handleDeleteAll() {
        this.props.deleteAll();
        this.props.setFilter('show_all')
    }

    handleDeleteIsBought() {
        this.props.deleteIsBought();
        this.props.setFilter('show_all')
    }

    render() {
        return (
            <div id="menu-wrap">
                <ul id="menu-list">
                    <li onClick={() => this.props.setFilter('show_all')}><ShowAllIcon /><span>Показать всё</span></li>
                    <li onClick={() => this.props.setFilter('show_is_bought')}>
                        <ShowIsBoughtIcon /><span>Показать купленное</span>
                    </li>
                    <li onClick={() => this.props.setFilter('show_not_bought')}><ShowNotBoughtIcon /><span>Показать некупленное</span>
                    </li>
                    <li onClick={this.handleDeleteIsBought.bind(this)}>
                        <DeleteIsBoughtIcon /><span>Удалить купленное</span></li>
                    <li onClick={this.handleDeleteAll.bind(this)}><DeleteAllIcon /><span>Очистить список</span></li>
                </ul>
                {this.renderCount()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        purchase: state.purchaseReducer,
        filter: state.filterReducer
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setFilter: setFilter,
        deleteIsBought: deleteIsBought,
        deleteAll: deleteAll
    }, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(MainMenu)