import React from 'react';
import PropTypes from 'prop-types';


import Modal from 'react-bulma-components/lib/components/modal';
import Image from 'react-bulma-components/lib/components/image';
import Media from 'react-bulma-components/lib/components/media';
import Button from 'react-bulma-components/lib/components/button';
import Content from 'react-bulma-components/lib/components/content';
import Level from 'react-bulma-components/lib/components/level';

class OpenModal extends React.Component {
  static propTypes = {
    modal: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    modal: {},
  };

  state = {
    show: false,
  };

  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });

  render() {
    return (
      <div>
        <Button onClick={this.open}>Open</Button>
        <Modal show={this.state.show} onClose={this.close} {...this.props.modal}>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}


    <OpenModal modal={{ closeOnBlur: true }}>
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>Title</Modal.Card.Title>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
            </Media.Item>
            <Media.Item>
              <Content>
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
                  If the children of the Modal is a card, the close button will be on the Card Head instead than the
                  top-right corner You can also pass showClose = false to Card.Head to hide the close button
                </p>
              </Content>
              <Level breakpoint="mobile">
                <Level.Side align="left">
                  <Button link>Like</Button>
                  <Button link>Share</Button>
                </Level.Side>
              </Level>
            </Media.Item>
          </Media>
        </Modal.Card.Body>
        <Modal.Card.Foot style={{ alignItems: 'center', justifyContent: 'center' }}>
          <p>Lorem Ipsum...</p>
        </Modal.Card.Foot>
      </Modal.Card>
    </OpenModal>

