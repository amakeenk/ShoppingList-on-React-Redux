import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {togglePurchase, deletePurchase, editPurchase, savePurchase} from '../actions/purchaseActions'
import Item from '../components/Item'
import '../styles/ListItems.less'

class ListItems extends React.Component {
    renderListItem() {
        if (this.props.purchase.length !== 0) {
            if (this.props.filter === 'show_all') {
                return this.listItemMapping(this.props.purchase)
            } else if (this.props.filter === 'show_is_bought') {
                const isBoughtItems = this.props.purchase.filter(item => item.isBought === true);
                return this.listItemMapping(isBoughtItems)
            } else if (this.props.filter === 'show_not_bought') {
                const notBoughtItems = this.props.purchase.filter(item => item.isBought === false);
                return this.listItemMapping(notBoughtItems)
            }
        } else {
            return (
                <div id="none-items-warning">
                    <h3>На данный момент у вас нет записей</h3>
                    <p>Для добавления новой записи, введите необходимый текст в текстовое поле и нажмите кнопку
                        "Добавить"</p>
                </div>
            )
        }
    }

    listItemMapping(array) {
        return (
            <div id="list-items">
                {
                    array.map((item, index) => <Item key={index}
                                                     id={index}
                                                     purchase={item.purchase}
                                                     isBought={item.isBought}
                                                     isEditing={item.isEditing}
                                                     togglePurchase={this.props.togglePurchase}
                                                     deletePurchase={this.props.deletePurchase}
                                                     editPurchase={this.props.editPurchase}
                                                     savePurchase={this.props.savePurchase}
                    />)
                }
            </div>
        )
    }

    render() {
        return (
            this.renderListItem()
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
        togglePurchase: togglePurchase,
        deletePurchase: deletePurchase,
        editPurchase: editPurchase,
        savePurchase: savePurchase
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(ListItems)