import React from 'react';
import './Jadwal.scss';
const JadwalCard = (props) => {
  return (
    <div className="jadwal">
      <div className="row1">
        <div className="left">
          <h2 className="jadwal_name">{props.judul}</h2>
          <p>{props.time}</p>
        </div>
        <div className="right" style={{ backgroundColor: props.color }}>
          {props.icon ? (
            <props.icon />
          ) : (
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_76)">
                <path
                  d="M9.30334 15.5737C9.20794 15.5743 9.11337 15.556 9.02505 15.5199C8.93674 15.4839 8.85641 15.4307 8.78867 15.3635L3.15632 9.72393C2.44982 9.01005 2.05353 8.04623 2.05353 7.04186C2.05353 6.03748 2.44982 5.07367 3.15632 4.35978C3.86835 3.64977 4.83286 3.25105 5.83839 3.25105C6.84393 3.25105 7.80844 3.64977 8.52047 4.35978L9.30334 5.14266L10.0862 4.35978C10.7982 3.64977 11.7628 3.25105 12.7683 3.25105C13.7738 3.25105 14.7383 3.64977 15.4504 4.35978C16.1569 5.07367 16.5532 6.03748 16.5532 7.04186C16.5532 8.04623 16.1569 9.01005 15.4504 9.72393L9.81801 15.3635C9.75028 15.4307 9.66995 15.4839 9.58163 15.5199C9.49331 15.556 9.39874 15.5743 9.30334 15.5737Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_76">
                  <rect width="17.3972" height="17.3972" fill="white" transform="translate(0.604736 0.351166)" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
      </div>
      <div className="row2">
        <p className="author">{props.name && props.name}</p>
      </div>
    </div>
  );
};

export default JadwalCard;
