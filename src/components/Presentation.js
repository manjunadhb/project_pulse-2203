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
    
  </div>
  )
}

export default Presentation