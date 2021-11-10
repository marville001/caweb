import React from "react";
import "../styles/news.scss";

import PageHeader from "../components/PageHeader";
import newsBg from "../images/news-header-bg.jfif";

import NewsCard from "../components/NewsCard";
import { useState } from "react";
import { useEffect } from "react";
import ReadNewsModal from "../components/ReadNewsModal";

const allnews = [
  {
    id: 23424,
    title: "Advent Message",
    news: "Pope Francis said recently, “Advent, which prepares us for Christmas ... it is a time of expectation and a time of hope. Advent is about getting ready for our Lord to come. But it is also a reminder that he has already come. He has already entered into the reality of our human existence, and he is still, and always will be, with us. Advent reminds us that Jesus is always arriving: in the people he sends into our lives; in the challenges we face every day; in the burdens we carry; even in our sufferings. And, Advent reminds us that God is faithful! His love for us is true. Let us never doubt that! This is why he sent his Son, our Lord Jesus Christ, into the world in the first place. To share our sufferings, to walk with us and to strengthen us.”",
  },
  {
    id: 5657,
    title: "COVID-19 Information",
    news: "Saint Kateri Tekakwitha, Lily of the Mohawks, you lost your whole family in a pandemic that swept your entire village. We come to you today, with bended knees, asking your intercession in this time of COVID-19 pandemic, that God will stop the spread of this plague throughout the whole world. Though partially blind, disfigured and crippled, you trekked the rough terrain to encounter God. Help us to encounter God in this difficult and uncertain time. Help us to encounter God as we take refuge in our homes. Help us to encounter God in the ICU’s and isolated rooms of hospitals. Help us to encounter God in our city halls and government buildings. Restore our sight to find Jesus and allow Him to love us.",
  },
  {
    id: 6879,
    title: "Update on Liturgical Celebrations",
    news: "Loving Greetings! On March 16, 2020, Archbishop Jose H. Gomez announced the suspension of Masses amid the current COVID-19 Pandemic. During this temporary suspension our Parish Church, Adoration Chapel and the Parish Office will remain closed until April 19, 2020, or until further notice. While the office is closed, we will have staff members available to answer your telephone calls and emails, as there are unavoidable needs to be addressed.  Social distancing that requires individuals to stay at least six feet apart is emphasized. The practice of good hygiene by the regular washing of hands with soap and water, or with hand sanitizer, and the disinfecting of surfaces like doorknobs, tables, and desks on a regular basis.  Our Pastor highly encourages the parishioners and our staff members to stay at home if they are sick, especially if they have symptoms of fever or cough, “STAY HOME” with their family, pray together and pray the Holy Rosary daily. We want to reassure all of our parishioners that despite the current disruptions to our community, that our parish will continue to assist you in your essential spiritual needs.",
  },
  {
    id: 5676,
    title: "Ethiopian bishops say it is not too late to stop the war in Tigray",
    news: "People displaced by fighting in Ethiopia's Tigray region wait in line to receive food donations at a temporary shelter in the town of Shire March 15, 2021. Ethiopian bishops are expressing a desire for peace, healing and reconciliation across the country, especially in Tigray following a yearlong war. (CNS photo/Baz Ratner, Reuters)",
  },
  {
    id: 53445,
    title: "Ethiopian bishops say it is not too late to stop the war in Tigray",
    news: "NAIROBI, Kenya (CNS) — Expressing compassion and solidarity with the people affected by war in Ethiopia’s Tigray region, the Ethiopian bishops’ conference said it is not too late to end the violence that has left thousands of people dead and 2 million more displaced As pastors, we can only give hope from what we have, and this is the hope that comes from our faith … to acknowledge that the only way forward, for the good of the people, is peace and reconciliation, to satisfy the demands of truth and justice, to ask for and grant forgiveness,” the bishops said July 16 at the conclusion of their planned assembly The bishops said they prayed for peace and the protection of all people, as violence and the resulting humanitarian crisis continued to grip Tigray in northern-most Ethiopia.War has continued in the region since Ethiopian Prime Minister Abiy Ahmed launched an offensive against rebel forces in November. At the time, Ahmed said the fighting would be over in weeks, but the violence has raged since.United Nations officials in June declared that parts of Tigray were in the midst of famine because of the war, with more than 400,000 struggling to find food. The U.N. Security Council in early July warned that as many as 33,000 children were severely malnourished. Meeting for four days in Modo, southeast of the capital of Addis Ababa, the bishops said the suffering the people are enduring “saddens our hearts … while all would like to hear about peace and reconciliation.We identify with them, their anguish is our anguish. Our compassion must be expressed in concrete solidarity,” the bishops said.They prelates also called on authorities in the region to allow full access to humanitarian aid the various relief agencies are attempting to provide.“We all want to see a country where all Ethiopians embrace each other as brothers and sisters. We kindly urge all parties involved that war only destroys lives and properties and nothing more and the choice to be made should not be war but peace and reconciliation,” the bishops said.Meanwhile, the church leaders offered prayers for Bishop Tesfasilassie Medhin of the Eparchy of Adigrat. He has been unable to join the bishops’ assembly since the fighting began.The war erupted as Ethiopia faced surges in ethnic violence across Africa’s second most populous nation. The widespread violence is stoking fears that the country potentially may be torn apart and could spread elsewhere and destabilize the entire Horn of Africa. People displaced by fighting in Ethiopia's Tigray region wait in line to receive food donations at a temporary shelter in the town of Shire March 15, 2021. Ethiopian bishops are expressing a desire for peace, healing and reconciliation across the country, especially in Tigray following a yearlong war. (CNS photo/Baz Ratner, Reuters)",
  },
];

const News = () => {
  const [news, setNews] = useState([]);
  const [newsOpen, setNewsOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState({});

  const openNews = (id) => {
    setNewsOpen(true);

    const n = news.filter(news=>news.id===id)[0];
    setCurrentNews(n);
  };
  const closeNews = (id) => {
    setNewsOpen(false);
  };

  useEffect(() => {
    setNews(allnews);
  }, []);

  return (
    <div className="news">
      <PageHeader image={newsBg} title="NEWS" />
      <ReadNewsModal news={currentNews} open={newsOpen} closeNews={closeNews} />
      <div className="sunday-news">
        <div className="sunday-news-container container">
          {news.map((content) => (
            <NewsCard openNews={openNews} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
