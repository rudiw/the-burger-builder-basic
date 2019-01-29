import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(upReq => {
                this.setState({error: null});

                return upReq;
            })
            axios.interceptors.response.use(upResp => upResp, upError => {
                console.log(upError);
                this.setState({error: upError})
            });
        }

        dismissError = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        dismissModal={this.dismissError} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;