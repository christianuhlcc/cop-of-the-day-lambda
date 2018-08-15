'use strict';

const team = ["Freddie Mercury","Brian May","Roger Taylor","John Deacon"];

function buildPairs() {
    let pairs = [];
    for (let i = 0; i < team.length - 1; i++) {
        for (let j = i + 1; j < team.length; j++) {
            pairs.push(team[i] + ' & ' + team[j]);
        }
    }
    return pairs;
}

function dayOfYear(){
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function cop() {
    const pairs = buildPairs();
    return pairs[dayOfYear() % pairs.length];
}

module.exports.run = (event, context) => {

    let cops = `The cops of today are ${cop()} `;
    let slack = require('slack-notify')(process.env.SLACK_WEBHOOK_URL);
    slack.send({
        channel: process.env.SLACK_CHANNEL,
        text: cops,
        unfurl_links: 1,
        username: 'Cop of the day'
    });
};
