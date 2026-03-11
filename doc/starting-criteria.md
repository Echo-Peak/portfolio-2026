# Goal

create a portfolio website. This will be more of portfolio that serves as a
high-traffic router to various projects than a biography.

This is a react, tailwindcss, shadcn, react-dom and shadcn/react based
website/UI. Setup this project accordingly.

## Requiremnts

- In hero section add a primary CTA for "Work with me?"
- In hero section add a secondary CTA to Echopeak Labs and PolyEnv
- Add GH WF pipeline to deploy the app.
- content.json should be in the public folder and refence within the app. Make
  sure to update the browser router so the routing is correct when deployed on
  the github pages domain
- This is a dark mode only website. I will include a abstract background at a
  later date.
- Headline should be "Software Engineer building secure cloud, desktop, and
  automation systems"

## Projects

### About echopeak labs agency

Website is https://echopeaklabs.com

This is a software agency is started in september 2025 that is focuses on
helping startups and SMB's mangage their AWS cloud infrastrucure cost + SOC 2,
HIPPA, PCI acompliance alignment

### About polyenv project

website is https://polyenv.ca

PolyEnv is a web and desktop application that lets users create environment
containers on one host and mirror them on another platform. It captures
applications, app data, environment variables, desktop settings, and personal
files. The web app and desktop agent communicate in real time over via AWS
WebSockets + connection pool, giving users live visibility into device status
and snapshot state across machines. All data is encrypted in transit and at
rest, with access limited to the end user.

### Tech specs and skills

This was built using AWS CDK. It invloves building multi-platform installer with
dotnet core 9x. NSIS installer/uninstaller, pkg installer/uninstaller scripts.
The desktop agent comprized of a system service and a lighweight maui frontend
desktop app. The system service was responsible for enrollment of the device to
be able to link a given device to a given users dashboard, encrypt and decrypt
environment containers. The desktop agent also includes auto-update
functionality. The frontend desktop app featured a UI in which allows the user
the enter a password they set to encrypt/decrypt the environment snapshot.

The system service agent is resposbile to sending the encrypted chunked data in
16mb chunks to cloudflare r2 by using s3 signed url to do POST / GET options on
the r2 bucket. Each operation the system service does is reflected to the users
dashboard via a api gateway via WS connection.

There are 2 AI intergrations implemented. One is the AI chat agent in which a
authenticated user can interact with to help answer questions. another one is
used in the multi-platform app resoling process. The AI agent is designed to
resolve a given appId againt a repository and/or local DB. For example, if the
user is on windows 11 and the user has Slack v4.48.95 installed, the appId will
be slack-4.48.95. Then if the user has switched to arch linux like cachyOS, the
desktop agent will send the current packagemanager, in this case "pacman", the
agent will scan the pacman repository for slack v4.48.x then cache the url
artifact to the local DB as a cache.

Some of the tech that was used was: AWS CDK, lambda, api gateway, cloudflare r2,
step functions, dynamoDB, aws bedrock, cloudformation, cloudfront, SSM, cognito,
oauth & OIDC

## UI

The theme/style of the website should dark glasmorispm. The look of the website
should look sleek and professional.

There should be just 4 pages:

- the landing page
- the about page
- the contact page
- the 404 page (catch all)

### Other UI details

- Favicon is located here /home/mike/Downloads/March 8 2026/image1-8.png. Copy
  the image to the public dir post app creation.

### landing page

The landing page will be responsible for showing the skills, flagship projects
and work expirence. Projects section will be a grid section of interactive card
components.

Expirence section will be a timeline UX with hover animations. Certifications
should show imageUrl and name.

### Contact page

This page will be for user who have seen the software agency i have but are not
interested, maybe they need some other work done. This page should capture those
people. The form will be a google form.

## Data

Extract content & type from
/media/mike/E6E2CAF9E2CACCCD/projects/Personal/2025/portfolio/public/content.json

### More info on data

- Remove YTMediaController entry from projects
- Change hero.badge to Senior cloud Engineer
- add "agency" field to .about with a value set to https://echopeaklabs.com
- Change hero.subtitle to "Artitecting AWS cloud infra". Update this as needed,
  i am focused on AWS cloud infra development and optimization (finOps).
- Remove .futureGoals section
- Remove .thingsBuilt section
- remove experiences[1], Mid-level Software Engineer
- Replace .skills with the criteria in "Skills and domains" below
- Look at .projects array. Remove title="CyberSmart Active Protect V1-V4"
- Look at .projects array. Add the polyenv project from above
- Adjust .certifications to include this:

```
[
  {
    name: "CompTIA Security+",
    imageUrl: "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F8623b0fab71111efac96d615e91762a5%3Fwidth%3D300%26height%3D300&w=384&q=90"
  },
  {
    name: "AWS Certified Developer - Associate",
    imageUrl: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/dva-badge-resized.d7d49d6e5cda74099c39ca24ef2573994f4b7955.png"
  }
]
```

- Add this to the .expirences[]

```
    {
      "title": "Cloud Engineer",
      "company": "Echopeak Labs",
      "period": "2025 - present",
      "description": "Echopeak Labs is a specialized software consulting agency focused on bridging the gap between complex cloud infrastructure and high-performance AI integration. Founded on the principle of "security-first" development, the agency helps organizations transition from MVP to enterprise-scale systems.",
      "achievements": [
        "Architected a centralized Legal Operations Framework to automate contract lifecycle management, streamlining bilateral execution and ensuring regulatory compliance between agency stakeholders and clientele." ,
        "Engineered a high-concurrency Internal Administrative Ecosystem, integrating a bespoke Content Management System (CMS) with real-time data visualization dashboards to optimize operational transparency and internal workflows."
        "Implemented a robust Financial Middleware Layer utilizing Stripe’s API to automate global invoicing, ledger reconciliation, and asynchronous payment processing."
        "Developed a real-time CI/CD Telemetry Integration for GitHub, synthesizing repository metadata into a dynamic, state-driven Kanban interface to provide granular project visibility and developer velocity tracking."
        "Designed an end-to-end Conflict Resolution Architecture, mapping complex state-machine user flows to facilitate automated dispute mitigation and transaction recovery protocols."
      ]
    },
```

## Skills and domains

Domains

**Cloud**

- Serverless aritecure
- Docker
- Kubernettues
- Terraform
- Cloudflare, workers and security(VPC's, WAF, filters)

**Backend**

- Python
- Typescript
- Node.js
- C#

**DB**

- PostgreSQL
- DynamoDB
- SQLite
