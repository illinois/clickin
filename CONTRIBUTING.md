# Contributing

When contributing to this repository, please keep in mind the following information.

We highly encourage you to join our [Slack channel on the UIUC OSS Slack](https://illinois-oss.slack.com) to discuss features, seek development support, and be alerted about our bi-weekly dev meetups. 

## To develop on your machine

1. Make a fork of the repository by clickin the fork button at the top right of the page
2. Clone the forked repository onto your local machine by running `git clone https://github.com/[YOUR GITHUB USERNAME]/clickin`
3. If you have not already, install [Node.js](https://nodejs.org/en/download/) and [Python 3](https://www.python.org/downloads/)
4. If developing frontend, from the repository root directory, run `npm install`
5. If developing backend, from the repository root directory, run `pip install -r server/requirements.txt`
6. Comment on any open issue to claim it, and begin developing!

## To run on your machine
1. Run the backend using `python3 server.py` in the `server/` directory
2. Run the webapp in your browser using `npm start` in the `app/` directory

## Reporting bugs and suggesting new features

If you wish to report a bug or suggest a new feature, please check that the issue hasn't already been filed, then open an issue describing the problem.

Before making any changes to the codebase, please discuss the changes on the issue itself, or on the Slack.

## Pull request process

When opening the pull request, please reference the issue being resolved and describe the changes that you have made to the project. 

For a PR to be merged, it requires two approving PRs from repository maintainers. 
