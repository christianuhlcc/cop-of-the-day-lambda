#Serverless Cops of the day



## What does it do

The cops of the day lambda takes a random pair of your Team (static for the whole day) and reports who's on duty to slack.
For my teams the "cops" are the people who are in charge of observing the system for the day - checking the errors in the logs, watching the metrics a bit and such. It's important to me that everybody on the team is capable of 
* Monitoring whatever system we're building
* Knowing where to perform maintenance when it fails
* Having all tooling set up correctly to respond quickly

And since we're all lazy, it's better to have a nice little tool to remind us about that

## Installation

This tool uses the [serverless]{https://serverless.com/framework/docs/} Framework for deployment. It's meant to be cloud agnostic, but I only tried the AWS Provider


1. Install serverless `npm install -g serverless`
1. Setup cloud credentials according to docs
1. Configure `SLACK_WEBHOOK_URL`, `SLACK_CHANNEL` and your team
1. `serverless deploy` 
1. OPTIONAL: test it with `serverless invoke -f cron -l`

## Configuration

1. in `serverless.yml` you can set your desired Slack channel
1. in handler.js set your team members
1. have a SLACK_WEBHOOK_URL in your environment (you probably don't want to publish this, it's a bit of a secret.)





