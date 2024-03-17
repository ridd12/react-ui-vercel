import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="west">
        <h1 style={{ fontSize: "4rem", color: "#000000" }}>Riddhish Khot</h1>
      </div>
      <div className="east">
        {/* <h1 style={{ fontSize: "4rem", color: "white" }}>List Of Projects</h1> */}
        <div className="company">
          <h1
            style={{ color: "white", fontSize: "2rem" }}
            className="companyName"
          >
            RKS Cloud
          </h1>
          <h1
            style={{ color: "white", fontSize: "2rem" }}
            className="companyName"
          >
            Mumbai, MH
          </h1>
        </div>
        <h1 style={{ color: "white" }}>
          Full Stack Software Development Engineer{" "}
        </h1>
        <ol>
          <li style={{ maxWidth: "500px", color: "#7a7c8a" }}>
            Built In-App-purchase Auto-renewable subscriptions for iOS and
            Android mobile applications. Used server-to-server notification to
            handle subscription lifecycle flow. I used AWS API-Gateway, Lambda,
            and SQS to handle notifications asynchronously.
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  );
}

// RKS Cloud                                                                                           Mumbai, MH
// Full Stack Software Development Engineer                                       Aug 2023- Present
// • Built In-App-purchase Auto-renewable subscriptions for iOS and Android mobile
// applications. Used server-to-server notification to handle subscription lifecycle flow.
// I used AWS API-Gateway, Lambda, and SQS to handle notifications asynchronously.
// • Integrated Stripe one-time payment and subscriptions in web application, managing
// payment lifecycles through server webhooks.
// • Contributed to building distributed pub-sub event-driven Cron job service for usage
// insights for the onboarded customer's data using reactive spring and AWS SQS.
// • Built onboarding system for AWS and GCP accounts using IAM STSRoles and Service
// accounts. With the successful implementation of a Reactive Spring application, leveraging
// AWS Cognito and AWS KMS for user authentication and robust data encryption
// respectively. Streamlined secrets retrieval through GraphQL APIs

export default Home;
