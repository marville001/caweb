import React from "react";
import "../styles/leadership.scss";
import PageHeader from "../components/PageHeader";
import leadershipBg from "../images/leadership-header-bg.jfif";

const Leadership = () => {
  return (
    <div>
      <PageHeader image={leadershipBg} title="LEADERSHIP" />
      <div className="container leadership">
        <div className="chaplain-leadership">
          <h3>Our Chaplain</h3>
          <div className="leader-card-container">
            <div className="leader-card">
              <div className="leader-img">
                <img
                  src="http://www.kccb.or.ke/home/wp-content/uploads/2013/12/Bishop_30-300x300.jpg"
                  alt="Our Chaplain"
                />
              </div>
              <p className="leader-name">Fr Vincent Wambugu</p>
              <p className="phone">+2753434434343</p>
                <p className="email">email@hdhdhhd.cccv</p>
            </div>
          </div>
        </div>
        <div className="exec-leadership">
        <h3 className="exec-title">The Executive Committee</h3>
          <div className="leader-card-container exec-leader-container">
            {[1, 2, 3, 4, 5, 6, 7, 8,9].map((q, i) => (
              <div className="leader-card">
                <div className="leader-img">
                  <img
                    src="http://www.kccb.or.ke/home/wp-content/uploads/2013/12/Bishop_30-300x300.jpg"
                    alt="Our Chaplain"
                  />
                </div>
                <p className="leader-name">Fr Vincent Wambugu</p>
                <p className="role-name">Chairman DEKUTCC</p>
                <p className="scc-name">St Angelus</p>
                <p className="phone">St Angelus</p>
                <p className="email">St Angelus</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
