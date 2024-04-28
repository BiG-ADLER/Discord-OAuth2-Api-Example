
# Discord OAuth2 Example Api





## How to Use

Install dependencies

```bash
  npm install
```

- Go to `Config` Folder and remove `.example` From file name. (rename it)

- Open `Config.json` and change it values like this
```json
{
    "ClientID": "Your Discord Application Client ID",
    "ClientSecret": "Your Discord Application Client Secret",
    "Port": 3000,
    "Token": "Your Discord Bot Token",
    "ApiVersion": 1,
    "Url": "https://localhost"
}
```
- Note: Make sure `Port` value type is `integer` or `number`

- Note: Make sure `ApiVersion` value type is `integer` or `number`

- Note: Make sure End of `Url` value does not have a `/`

- After Configuration, Save & Close `Config.json`

- Go to [Discord Developer Portal](https://discord.com/developers/applications)

- Select your choosed application

- Go to `OAuth2` Category

- In `Redirects` Section, Click on `Add Redirect`

- Add your `URL` Like this, `{Your Site Url (Same as Config)}`:`{Your Site Port (Same as Config)}/`api/v`{Your Api Version (Same as Config)}`/auth/discord/redirect

- Note: It should be like this, `http://localhost:3000/api/v1/auth/discord/redirect`

- Save it and go to next Section. `(OAuth2 URL Generator)`

- Select these options `identify`, `connections`, `guilds`, `gdm.join`, `email`, `guilds.join`

- Go Down and Choose your `Redirect URL` in `Select Redirect Url` Section

- In `Generated Url` Section, Click on `Copy` Button 
## Deployment

To deploy this api run this command in console(cmd)

```bash
  npm start
```


## Authors

- [@BiG ADLER](https://www.github.com/BiG-ADLER)


## Acknowledgements

 - [Node JS](https://nodejs.org/en)
## Support

For support, [Send Email](https://mail.google.com/mail/?view=cm&source=mailto&to=bigadler40@gmail.com) or [DM to Me](https://discord.com/users/809903662947893319) in Discord.


## License

[MIT](https://choosealicense.com/licenses/mit/)

