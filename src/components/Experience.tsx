const Experience = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Experience</h2>
      <div className="pt-8">
        <div>
          <a href="https://www.safe.security/" target="_blank">
            <h3 className="text-2xl font-semibold">Safe Security, Bengaluru</h3>
          </a>
          <h4 className="text-xl font-semibold">
            Software Development Engineer II
          </h4>
          <p className="text-lg">Oct 21 - Jun 22</p>
        </div>
        <div className="pl-4 pt-2 space-y-1">
          <ul className="space-y-1 list-disc list-inside">
            <li>
              <p className="text-lg inline">
                Worked as Javascript full-stack developer. Enhanced performance
                and scalability of safeme.ai, a multi-tenant serverless
                microservice.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Implemented low-latency data streams to synchronize data from a
                single-table architecture in DynamoDB to MySQL for on-demand
                queries.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="text-2xl font-semibold">Snapwiz Inc., Bengaluru</h3>
        <h4 className="text-xl font-semibold">Software Engineer</h4>
        <p className="text-lg">Jan 18 - Sep 21</p>
        <div className="pl-4 pt-2 space-y-1">
          <ul className="space-y-1 list-disc list-inside">
            <li>
              <p className="text-lg inline">
                Worked as MERN full-stack developer on Edulastic project, a
                Learning Management System primarily used in the USA by over 21K
                schools and colleges.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Designed and developed various key features, subscriptions and
                payment management, text to speech, curriculum sequence and
                reports for Edulastic-v2 in Node.js and React.js in a serverless
                restful environment.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Developed tools to migrate users from other LMS e.g. Canvas,
                Clever, Google Classroom to Edulastic and keep posting their
                activities on the original platform, this allowed to gather new
                users in large numbers.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Implemented bubble-sheet scanner using OpenCV with Python and
                C++ to automate ORM sheets scan, which helps teachers to see
                student&apos;s scores directly in the application.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Undergone 3 months of training on Spring MVC, Hibernate,
                Mongodb, Redis and Backbone.js. Worked as full-stack java
                developer, monitoring performance and optimization for web
                application for a year and maintained Snapscore bubble-sheet
                scanner mobile application.
              </p>
            </li>
            <li>
              <p className="text-lg inline">
                Awarded with Appreciation Award twice for delivering quality
                products and extra efforts to make the application stable
                consistently.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
