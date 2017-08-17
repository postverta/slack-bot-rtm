const Express = require("express");
const BodyParser = require("body-parser");

const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

if (!process.env.SLACK_BOT_TOKEN) {
  console.log("Please set the bot token in .env");
  process.exit(0);
}

var botToken = process.env.SLACK_BOT_TOKEN;
var rtm = new RtmClient(botToken);

// Incoming message handler
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  console.log('Message:', message);
  if (message["type"] === "message" && message["user"] !== rtm.activeUserId) {
    rtm.sendMessage(message["text"], message["channel"]);
  }
});

// Connect with slack
rtm.start();

const app = Express();
app.get("/", function(req, res) {
  res.send("The bot will automatically register with slack. Nothing needs to be done.");
});

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
