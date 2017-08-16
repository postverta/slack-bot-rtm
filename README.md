# Slack bot demo using the RTM API

[![Run with Postverta badge](http://postverta.io/badge.svg)](http://postverta.io/direct/postverta/slack-bot-rtm)

This simple app demonstrates how to write a simple Slack bot using Slack's
[Real-Time Messaging (RTM) API](https://api.slack.com/rtm) and its official
[node SDK](https://slackapi.github.io/node-slack-sdk/bots).

## Install the bot

1. Go to Slack API's homepage [https://api.slack.com/apps/](https://api.slack.com/apps/) and create a new app.
Install the app with your team.

2. Go to the "Bot Users" section under "Features", and create a new bot user.

![Where to find bot users](https://i.imgur.com/x7WXjmT.png)

3. Go to "Install App" section under "Settings", and note down the Bot User
   OAuth Access Token.  Set the token to the `.env` file.

![Where to find bot token](https://i.imgur.com/OSzfIyc.png)

4. Go to your Slack, create a test channel, and invite your bot user to that
   channel.

That's it! Now you can try saying something in the test channel. The bot will
mirror whatever you said back to the channel.

## How does it work?

The app creates a websocket connection (through the slack SDK) to Slack. It
then registers a handler for any incoming message to any channel it is part of.
To learn more about the SDK, please go to the [official
documentation](https://slackapi.github.io/node-slack-sdk/bots).

## Next steps

There are a lot more you can do with the RTM API and the SDK! Try to write a
more interesting message handler, or go to the documentation and discover other
events you can register.
