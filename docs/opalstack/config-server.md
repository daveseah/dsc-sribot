To run this on opalstack as a monitored daemon:

- in the opalstack application `apps/dcafe-bot`, clone `dscafe-sribot` repo.
- edit `start` bash script to run `dscafe-sribot/_start.js`, which will invoke `app/_init.mjs`

## For Interactive Testing

From the app-dscafe-bot root directory, run the `_start` command from the cloned repo

`node dscafe-sribot/_start`

## For Continuous Running

When Opalstack provisions your NodeJS app, it automatically creates `start` and `stop` scripts that load the example `app.js`.
I've also added `errors` and `outputs` scripts to just easily monitor the node error and output logs, since these are not emitted to the console.
**Copy them** to the root folder.

## NodeJS Notes for Opalstack

When Opalstack provisions a NodeJS application for you, your 'route' will forward traffic on port 80 to an ARBITRARY PORT that is assigned to your app. This is how outside traffic will be directed to you. If you want to write a socket server in node, you need to use the `setfacl` commands somehow to "share the socket directory", but for plain web traffic this is done for you already. Your app should be written so it listens to the assigned socket port and expect http data forwarded from port 80.

If you are writing a client (such as this bot), you don't need to worry the proxy port.
