import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state ={
            error: null
        };

        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            }, err => {
                this.setState({error: err})
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err})
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }

        resetErrorHandler = () => {
            this.setState({error: null});
        }

        render() {
            return(
                <Aux>
                    <Modal show={this.state.error} closeModal={this.resetErrorHandler}>
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;