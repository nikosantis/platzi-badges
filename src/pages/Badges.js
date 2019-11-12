import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

  state = {
    loading: true,
    data: undefined
  };

  render() {
    console.log('2/4. Render()');
    return (
      <React.Fragment>

        <div className='Badges'>
          <div className='Badges__hero'>
            <div className='Badges__container'>
              <img
                className='Badges__conf-logo'
                src={confLogo}
                alt='Conf Logo'
              />
            </div>
          </div>
        </div>

        <div className='Badge__container'>
          <div className='Badges__buttons'>
            <Link to='/badges/new' className='btn btn-primary'>
              New Badge
            </Link>
          </div>

          <div className='Badges__list'>
            <div className='Badges__container'>
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
