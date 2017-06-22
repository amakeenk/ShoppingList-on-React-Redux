import React from 'react';
import '../styles/Item.less'
import {DeleteIcon, EditIcon, CancelIcon, SaveIcon} from '../components/Icons';


export default class Item extends React.Component {
    renderPurchase() {
        const purchaseStyle = {
            color: this.props.isBought ? 'green' : 'black',
            textDecoration: this.props.isBought ? 'line-through' : 'none'
        };
        if (this.props.isEditing) {
            return (
                <form id="edit-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" defaultValue={this.props.purchase} ref="editInput"/>
                </form>
            );
        }
        return (
            <span className="item" style={purchaseStyle}>{ this.props.purchase }</span>
        );
    }

    renderActions() {
        if (this.props.isEditing) {
            return (
                <div>
                    <span className="button"
                          onClick={this.thisEditPurchase.bind(this, this.props.id)}><CancelIcon /></span>
                    <span className="button"
                          onClick={this.thisSavePurchase.bind(this, this.props.id)}><SaveIcon /></span>
                </div>
            );
        }
        return (
            <div>
                <span className="button"
                      onClick={this.thisDeletePurchase.bind(this, this.props.id)}><DeleteIcon /></span>
                <span className="button" onClick={this.thisEditPurchase.bind(this, this.props.id)}><EditIcon /></span>
            </div>
        );
    }

    thisTogglePurchase(id) {
        this.props.togglePurchase(id)
    }

    thisDeletePurchase(id) {
        this.props.deletePurchase(id)
    }

    thisEditPurchase(id) {
        this.props.editPurchase(id)
    }

    thisSavePurchase(id) {
        const newValue = this.refs.editInput.value;
        if (newValue !== this.props.purchase && newValue !== '') {
            this.props.savePurchase(id, newValue)
        }
    }

    render() {
        const checked = this.props.isBought ? 'checked' : '';
        return (
            <div className="shoppingList-item">
                <input type="checkbox"
                       id="check"
                       onChange={this.thisTogglePurchase.bind(this, this.props.id)}
                       checked={checked}
                />
                {this.renderPurchase()}
                <div>
                    {this.renderActions()}
                </div>
            </div>
        );
    }
}



