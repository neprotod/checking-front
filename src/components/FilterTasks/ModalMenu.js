import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import routes from '../../routes/routes';
import styles from './MainPage.module.css';
import ModalMenuMarkup from './ModalMenuMarkup';

const todayTomorrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const Next7Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57c.25-.35.25-.81 0-1.16l-3.96-5.58C16.26 5.31 15.65 5 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58z" />
  </svg>
);

const burnedOutSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M17.09 4.56c-.7-1.03-1.5-1.99-2.4-2.85-.35-.34-.94-.02-.84.46.19.94.39 2.18.39 3.29 0 2.06-1.35 3.73-3.41 3.73-1.54 0-2.8-.93-3.35-2.26-.1-.2-.14-.32-.2-.54-.11-.42-.66-.55-.9-.18-.18.27-.35.54-.51.83C4.68 9.08 4 11.46 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.49-1.08-6.73-2.91-9.44zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.47-.3 2.98-.93 4.03-1.92.28-.26.74-.14.82.23.23 1.02.35 2.08.35 3.15.01 2.65-2.14 4.8-4.79 4.8z" />
  </svg>
);

const doneSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
  </svg>
);
const statisticsSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const ModalMenu = ({ ...props }) => {
  const { onClickIsMobile, isModalOpen, statistics } = props;

  let title;
  let bg;
  let picture;
  const statisticsBg = statistics ? styles.whiteBg : styles.grayBg;
  return (
    <>
      {isModalOpen && (
        <div className={styles.menu}>
          {Object.entries(props)
            .filter(prop => prop[0].includes('isMobile'))
            .map(prop => {
              bg = prop[1] ? styles.whiteBg : styles.grayBg;

              title = prop[0].slice(8);
              switch (prop[0]) {
                case 'isMobileToday':
                case 'isMobileTomorrow':
                  picture = todayTomorrowSvg;
                  break;
                case 'isMobileNext7Days':
                case 'isMobileAfter7Days':
                  picture = Next7Svg;
                  break;
                case 'isMobileBurnedOut':
                  picture = burnedOutSvg;
                  break;

                case 'isMobileDone':
                  picture = doneSvg;
                  break;

                default:
                  return title;
              }
              return (
                <ModalMenuMarkup
                  key={prop[0]}
                  name={prop[0]}
                  bg={bg}
                  onClickIsMobile={onClickIsMobile}
                  picture={picture}
                  title={title}
                />
              );
            })}

          <NavLink
            to={routes.STATISTICS_PAGE.path}
            style={{ textDecoration: 'none' }}
          >
            <button
              type="button"
              name="statistics"
              className={statisticsBg}
              onClick={onClickIsMobile}
            >
              <p className={styles.menuButtonPict}>{statisticsSvg}</p>
              <p className={styles.menuButtonText}>Statistics</p>
            </button>
          </NavLink>
        </div>
      )}

      {isModalOpen && (
        <button type="button" className={styles.logoutButton}>
          Log out
        </button>
      )}
    </>
  );
};

ModalMenu.propTypes = {
  onClickIsMobile: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isMobileToday: PropTypes.bool.isRequired,
  isMobileTomorrow: PropTypes.bool.isRequired,

  isMobileNext7Days: PropTypes.bool.isRequired,
  isMobileAfter7Days: PropTypes.bool.isRequired,
  isMobileBurnedOut: PropTypes.bool.isRequired,
  isMobileDone: PropTypes.bool.isRequired,
  statistics: PropTypes.bool.isRequired,
};

export default ModalMenu;
