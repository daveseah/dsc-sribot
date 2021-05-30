If you haven't set up the ssh user for the account running the bot, follow these steps:

#### Git Config

```
git config --global user.name "Your Name"
git config --global user.email "username@domain.com"
```

#### Install NVM

Follow instructions at [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) to run installation script. Opalstack says this is OK on their hosting system.

#### Visual Studio Config

This is set up for use with Visual Studio Code connected via SSH Remote extension:

- ms-vscode-remote.remote-ssh

## Setup the App

Grab the repo. All the files should be on the top level of the Opalstack NodeJS app instance

For improved editing experience in Visual Studio Code, make sure that the following extensions are installed on the server under `~/.vscode-server/extensions` by going to VSC's extension and clicking 'install on <your ssh server>':

- dbaeumer.vscode-eslint
- sbenp.prettier-vscode
- natqe.reload

## Starting Up

The package.json file runs `app/_start.js` when you type `node .`

## Automatic Startup

Edit the file and start: `/home/username/dscafe_sribot/start`

Stop your app by running: `/home/username/dscafe_sribot/stop`
