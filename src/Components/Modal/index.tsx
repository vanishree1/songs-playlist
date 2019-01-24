import React, { Component } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

interface ViewModalInterface {
    show: boolean;
    handleClose: () => void;
    musicInfo: any;
}
class ViewModal extends Component<ViewModalInterface, {}> {
  render() {
    const { show, handleClose, musicInfo } = this.props
    console.log('music info', musicInfo)
    const imgSrc = musicInfo['im:image'] !== undefined ? musicInfo['im:image'][0].label: ''
    const title = musicInfo['title'] !== undefined ? musicInfo['title'].label: ''
    const artistName = musicInfo['im:artist'] !== undefined ? musicInfo['im:artist'].label: ''
    const copyrights = musicInfo['rights'] !== undefined ? musicInfo['rights'].label : ''
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
              <Image src={imgSrc} />
             <p> {artistName} </p> 
              
             <p> {title}</p> 
             
             <p> {copyrights} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Buy Now
            </Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default ViewModal;
