import React from 'react';

function Message(props) {
  if (props.messages)
    return (
      <ul>
      {
        props.messages.map(m => (
          <li>{m.msg}</li>
        ))
      }
      </ul>
    );
  else 
      return <> </>;
}
module.exports = Message;