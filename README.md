# chisato.js

a work-in-progress TypeScript bot built with
[discord.js](https://discord.js.org).

definitely not an attempt of me learning JS/TS for actual work lol.

## usage

- create a file named `.env`, based on the `.env.example`.
- fill in your Discord application's bot token and client ID.
- fill in your osu! OAuth application's token and client ID.
- run the following commands:

```console
// you can use npm, yarn or pnpm. i use pnpm!
$ pnpm i
$ pnpm build
$ pnpm start
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
## license

licensed under either of

*   Apache License, Version 2.0  
    ([LICENSE-APACHE](LICENSE-APACHE) or https://www.apache.org/licenses/LICENSE-2.0)
*   MIT license  
	([LICENSE-MIT](LICENSE-MIT) or https://opensource.org/licenses/MIT)

at your option.

## contribution

unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall
be dual licensed as above, without any additional terms or conditions.
