import React from "react";
import "../styles/scc.scss";
import PageHeader from "../components/PageHeader";
import newsBg from "../images/news-header-bg.jfif";
// import stPetersImg from "../images/stpeters.jpg";
// import stJosephImg from "../images/stjoseph.jpg";
// import stAngelusImg from "../images/stangelus.jpg";

// import stJohnImg from "../images/stjohn.jpg";
// import stVitusImg from "../images/stvitus.jpg";
// import stGabrielImg from "../images/stgabriel.jpg";
// import choirImg from "../images/choir.jpg";
// import ladiesImg from "../images/ladies.jpg";
// import gentsImg from "../images/gents.jpg";
// import SccCard from "../components/SccCard";

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
              <SccCard
                title="Saint Angela SCC"
                image={stAngelusImg}
                description="For all students belonging to Computer science, Information Technology(I.T) ,Industrial Chemistry, Leather Technology and School Of Health Science. "
              />
              <SccCard
                title="Saint Joseph SCC"
                image={stJosephImg}
                description="For all students belonging to the school of Engineering, Geospatial and geomatics. "
              />
              <SccCard
                title="Saint Peter SCC"
                image={stPetersImg}
                description="For all students pertaking business related courses."
              />
            </div>
          </div>
        </div>

        {/* Minor SCC */}
        <div className="scc-groups">
          <div className="container">
            <h2>OTHER SCC GROUPS</h2>

            <div className="scc-groups-container">
            <SccCard
                title="Saint Cecilia Choir"
                image={choirImg}
                description="This absorbs students from the all schools within the institution with the main objective being to sing during the mass. the Choir has also recorded various songs. the participation goes beyond church service as they also pertake in various events within and outside the university."
              />
              <SccCard
                title="Saint Vitus Innovetia"
                image={stVitusImg}
                description="This also absorbs students from the all schools within the institution with the main objective being to spread the gospel through talent. They perform various activities ranging from dancing, art, singing and many more. they also lead the liturgical team during mass."
              />
              <SccCard
                title="Saint John Altarservers"
                image={stJohnImg}
                description="This team entails all the altar boys and girls whose main objective is to prepare and serve mass. they also organise sacrament of confession when the priest is to come. They also lead the Christians through the Catholic Doctrines."
              />
              <SccCard
                title="Saint Gabriel"
                image={stGabrielImg}
                description="This team entails the instrument team. They are in charge of controlling Adoration and maintaining the church Instrument systems including th sound systems, music instruments projectors. they Take charge of the instruments especially during the Holy Mass and during Koinonea
                They are also incharge of all the communication media of the Church."
              />
              <SccCard
                title="Saint Paul CA Gents"
                image={gentsImg}
                description="All gentlemen by default belong to this group."
              />
              <SccCard
                title="Saint Catherine of Siena CA Ladies"
                image={ladiesImg}
                description="All ladies by default belong to this group."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scc;
