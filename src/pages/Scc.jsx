import React from "react";
import "../styles/scc.scss";
import PageHeader from "../components/PageHeader";
import newsBg from "../images/news-header-bg.jfif";

const Scc = () => {
  return (
    <div>
      <PageHeader
        image={newsBg}
        variant="secondary"
        title="SMALL CHRISTIAN COMUNITIES"
      />
      <div className="scc">
        <div className="container">
          <div className="scc-description-content">
            <p>
              Dekut Catholic Chaplaincy is organised into various movements
              refered to as Small Christian Comunitities (SCC) each of which has
              it's own leaders but working under the main DEKUTCA leadership
              Body led by the CA Chairperson. The core objective of the SCC
              groups is to enhance the involvement of the students in church
              activities, promote asense of belonging and brotherhood among the
              students
            </p>
          </div>
        </div>

        <div className="common-activities-container">
          <div className="common-activities-content container">
            <h2>Scc Common Activities</h2>
            <div className="common-activities">
              <div className="activity">
                <h4>Charity Activities</h4>
              </div>
              <div className="activity">
                <h4>SCC Hikes</h4>
              </div>
              <div className="activity">
                <h4>SCC Bashes</h4>
              </div>
              <div className="activity">
                <h4>Sunday Meetings</h4>
              </div>
            </div>
          </div>
        </div>

        
        {/*Major SCC GROUPS */}
        <div className="scc-groups">
          <div className="container">
            <h2>MAJOR SCC GROUPS</h2>

            <div className="scc-groups-container">
              {[1,2,3].map(group=>(
              <div className="scc-group">
                <h3>Saint Joseph SCC</h3>
                <img src={newsBg} alt={"Saint Joseph Scc"} />
                <p>For all students belonging to the school of Engineering, Geospatial and Geomatics</p>
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minor SCC */}
        <div className="scc-groups">
          <div className="container">
            <h2>OTHER SCC GROUPS</h2>

            <div className="scc-groups-container">
              {[1,2,3,4,5,6].map(group=>(
              <div className="scc-group">
                <h3>Saint Joseph SCC</h3>
                <img src={newsBg} alt={"Saint Joseph Scc"} />
                <p>For all students belonging to the school of Engineering, Geospatial and Geomatics</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scc;
