import React, { memo } from 'react';
import { InlineWidget } from 'react-calendly';
import GoToTop from '../functions/GoToTop';
import './Appointment.css';

const Appointment = () => {
  const calendlyStyles = {
    height: '70vh',
    width: '100vw',
    paddingTop: 'auto',
  };

  return (
    <div className="calendly_container">
      <div className="calendly_component">
        <h1 className="title">Schedule a visit with us</h1>
        <div className="calendly__form">
          <div className="calendly-inline-widget">
            <InlineWidget
              url="https://calendly.com/deluxecaravans/inspection?primary_color=8b8b8b"
              styles={calendlyStyles}
            />
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default memo(Appointment);
