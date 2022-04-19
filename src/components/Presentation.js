import React from 'react';
import {Button} from 'react-bootstrap';


function Presentation() {
  return (
    <div>

      <div >
      <div >
        <h4 className="presentation">Choose Current Batch</h4>
        <form className="presentation">
        <input type="text" id="CurrentBatch" name="CurrentBatch"></input>
        </form>

      </div>

      <div className="presentation">
                  <>
             
              <Button as="input" type="button" value="Get Participants" />{' '}
              <Button as="input" type="button" value="Choose Participants" />{' '}
              <Button as="input" type="button" value="Choose Topics" />{' '}
              <Button as="input" type="button" value="Review Presentation" />{' '}
            </>
      </div>

      </div>

      <div className='participantHere'>Choose Participant</div>
      <div className='TopicHere'>Choose Topic Here</div>

    
      <div>
        
            <h2>Assigned into V Santosh</h2>

              <ul>
                <li>Getting Participants</li>
                <li>Getting Topics</li>
                <li>Animation to pick person and topic randomly</li>
                <li>Review Presentation and submit to server</li>
                <li>Get presentation history</li>
                <li>Choose Batch</li>
              </ul>
      </div>
    
  </div>
  )
}

export default Presentation