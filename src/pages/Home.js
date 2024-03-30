import { useEffect, useState } from "react";
import "./Home.css";
import {
  SiLeetcode,
  SiLinkedin,
  SiGithub,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

function Home() {
  const [style1, setStyle1] = useState("mediumhr");
  const [style2, setStyle2] = useState("smallhr");
  const [style3, setStyle3] = useState("smallhr");
  const [blur1, SetBlur1] = useState("removeblur");
  const [blur2, SetBlur2] = useState("makeblur");
  const [blur3, SetBlur3] = useState("makeblur");

  return (
    <div className="home">
      <div className="west">
        <div>
          <h1 className="name">Riddhish Khot</h1>
          <h3 className="name">Software Developer</h3>
          <h4 className="name">
            Bringing digital dreams to life with code craftsmanship.
          </h4>
        </div>
        <div className="navigator">
          <div
            className={`navigator-child ${blur1}`}
            onMouseEnter={() => {
              setStyle1("mediumhr");
              SetBlur1("removeblur");
            }}
            onMouseLeave={() => {
              setStyle1("smallhr");
              SetBlur1("makeblur");
            }}
          >
            <hr className={style1} />
            <h4 className="name">About</h4>
          </div>
          <div
            className={`navigator-child ${blur2}`}
            onMouseEnter={() => {
              setStyle2("mediumhr");
              SetBlur2("removeblur");
            }}
            onMouseLeave={() => {
              setStyle2("smallhr");
              SetBlur2("makeblur");
            }}
          >
            <hr className={style2} />
            <h4 className="name">Experience</h4>
          </div>
          <div
            className={`navigator-child ${blur3}`}
            onMouseEnter={() => {
              setStyle3("mediumhr");
              SetBlur3("removeblur");
            }}
            onMouseLeave={() => {
              setStyle3("smallhr");
              SetBlur3("makeblur");
            }}
          >
            <hr className={style3} />
            <h4 className="name">Projects</h4>
          </div>
        </div>
        <div className="socialMedia">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/riddhish-khot/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiLinkedin size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://github.com/ridd12"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiGithub size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://leetcode.com/ridk/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiLeetcode size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/riddhish_khot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={24} color="#000000" />
            </a>
          </div>
        </div>
      </div>
      <div className="east">
        <div>
          <h5>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </h5>
          <h5>
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </h5>
          <h5>
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds
          </h5>
          <div className="experience">
            <h5>2023 Aug - Present</h5>
            <div className="firstCompany">
              <h5>RKS CLoud</h5>
              <h6>
                Built In-App-purchase Auto-renewable subscriptions for iOS and
                Android mobile applications. Used server-to-server notification
                to handle subscription lifecycle flow. I used AWS API-Gateway,
                Lambda, and SQS to handle notifications asynchronously.
                Integrated Stripe one-time payment and subscriptions in web
                application, managing payment lifecycles through server
                webhooks. Contributed to building distributed pub-sub
                event-driven Cron job service for usage insights for the
                onboarded customer's data using reactive spring and AWS SQS.
                Built onboarding system for AWS and GCP accounts using IAM
                STSRoles and Service accounts. With the successful
                implementation of a Reactive Spring application, leveraging AWS
                Cognito and AWS KMS for user authentication and robust data
                encryption respectively. Streamlined secrets retrieval through
                GraphQL APIs
              </h6>
            </div>
          </div>
          <div className="experience">
            <h5>2023 Aug - Present</h5>
            <div className="firstCompany">
              <h5>RKS CLoud</h5>
              <h6>
                Built In-App-purchase Auto-renewable subscriptions for iOS and
                Android mobile applications. Used server-to-server notification
                to handle subscription lifecycle flow. I used AWS API-Gateway,
                Lambda, and SQS to handle notifications asynchronously.
                Integrated Stripe one-time payment and subscriptions in web
                application, managing payment lifecycles through server
                webhooks. Contributed to building distributed pub-sub
                event-driven Cron job service for usage insights for the
                onboarded customer's data using reactive spring and AWS SQS.
                Built onboarding system for AWS and GCP accounts using IAM
                STSRoles and Service accounts. With the successful
                implementation of a Reactive Spring application, leveraging AWS
                Cognito and AWS KMS for user authentication and robust data
                encryption respectively. Streamlined secrets retrieval through
                GraphQL APIs
              </h6>
            </div>
          </div>
          <div className="experience">
            <h5>2023 Aug - Present</h5>
            <div className="firstCompany">
              <h5>RKS CLoud</h5>
              <h6>
                Built In-App-purchase Auto-renewable subscriptions for iOS and
                Android mobile applications. Used server-to-server notification
                to handle subscription lifecycle flow. I used AWS API-Gateway,
                Lambda, and SQS to handle notifications asynchronously.
                Integrated Stripe one-time payment and subscriptions in web
                application, managing payment lifecycles through server
                webhooks. Contributed to building distributed pub-sub
                event-driven Cron job service for usage insights for the
                onboarded customer's data using reactive spring and AWS SQS.
                Built onboarding system for AWS and GCP accounts using IAM
                STSRoles and Service accounts. With the successful
                implementation of a Reactive Spring application, leveraging AWS
                Cognito and AWS KMS for user authentication and robust data
                encryption respectively. Streamlined secrets retrieval through
                GraphQL APIs
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
