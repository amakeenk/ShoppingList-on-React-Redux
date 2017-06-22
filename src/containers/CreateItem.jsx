import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPurchase} from '../actions/purchaseActions'
import {addError} from '../actions/errorsActions'
import '../styles/CreateItem.less'

class CreateItem extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const inputValue = this.refs.createInput.value;
        const validateInput = this.validateInput(inputValue);
        if (validateInput) {
            this.props.addError(validateInput);
            return;
        }
        this.props.error.splice(0, 1);
        this.props.addPurchase(inputValue);
        this.refs.createInput.value = '';
    }

    validateInput(inputValue) {
        if (inputValue === '') {
            return "Введите название";
        }
        else if (this.props.purchase.find(item => item.purchase === inputValue)) {
            return "Данное название уже существует, введите другое"
        }
        else {
            return null;
        }
    }

    renderError() {
        if (!this.props.error) {
            return null;
        }
        return (
            <div id="errors">
                <span>
                    {this.props.error}
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <form id="create-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" id="input-text" ref="createInput" placeholder="Что необходимо купить?"/>
                    <button id="add-item">Добавить</button>
                </form>
                {this.renderError()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        purchase: state.purchaseReducer,
        error: state.errorsReducer
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPurchase: addPurchase,
        addError: addError
    }, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(CreateItem);


