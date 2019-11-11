import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia'></img>
        </div>

        <div className='Badge__section-name'>
          <img className='Badge__avatar' src='https://secure.gravatar.com/avatar/75f0189ccbb9cb72d6f0d535b5ab8efe' alt='Avatar' />
          <h1>Nikolas <br/> Santis</h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Frontend Developer</h3>
          <div>@nikosantise</div>
        </div>
        <div className='Badge__footer'>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
