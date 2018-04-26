import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Formspree extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
      render() {
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                <div class="col-md-6">
                    <form action="https://formspree.io/nikayahale@gmail.com" method="POST">
                        <div class="control-group">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Your Name" id="name" required="" data-validation-required-message="Please enter your name" name="name"/>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="email" class="form-control" placeholder="Your Email" id="email" required="" data-validation-required-message="Please enter your email" name="_replyto" />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group">
                                <textarea class="form-control" rows="7" placeholder="Your Message" id="message" required="" data-validation-required-message="Please leave a message" name="message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="text-center">
                            <div id="success"></div>
                            <button type="submit" class="btn btn-lg btn-black">
                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Send Message</button>
                        </div>
                    </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }
    
export default Formspree;