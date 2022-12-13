# chisato.js

a work-in-progress TypeScript bot built with
[discord.js](https://discord.js.org).

definitely not an attempt of me learning JS/TS for actual work lol.

## usage

- create a file named `config.json`, based on the `config.example.json`.
- fill in your Discord application's bot token and client ID.
- run the following commands:

```console
$ tsc --build
$ node .\build\src\index.js
```

## to-do

- [ ] osu! features
	- [ ] verify users
	- [ ] automatically change Discord nickname to osu! username
	- [ ] tournament features
		- [ ] match reminder
		- [ ] match result report
		- [ ] manage tournament settings
		- [ ] tournament sign-up
		- [ ] manage users
		- [ ] stream/ref sign-up
		- [ ] IRC referee
		- [ ] tournament performance lookup
- [ ] twitch stream announcements
- [ ] process Google Sheets
	- [ ] read tournament info (schedule, match data, etc.)
	- [ ] convert tournament info to bot data
