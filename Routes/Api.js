// Import Packages
import express from "express";
import axios from "axios";
import url from "url";

// Import Config
import Config from "../Config/Config.json" assert { type: "json" }

// Import Package Classes
const Router = express.Router();

Router.get(`/auth/discord/redirect`, async (req, res) => {
    const { code } = req.query;

    if (code) {
        const FormData = new url.URLSearchParams({
            client_id: Config.ClientID,
            client_secret: Config.ClientSecret,
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: `${Config.Url}:${Config.Port}/api/v${Config.ApiVersion}/auth/discord/redirect`
        })
        const Output = await axios.post('https://discord.com/api/v10/oauth2/token',
            FormData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )

        if (Output.data) {
            const AccessToken = await Output.data.access_token;

            const UserInfo = await axios.get('https://discord.com/api/v10/users/@me', {
                headers: {
                    'Authorization': `Bearer ${AccessToken}`
                }
            })

            if (UserInfo.data) {
                const AccessToken = await Output.data.access_token;

                const UserGuilds = await axios.get('https://discord.com/api/v10/users/@me/guilds', {
                    headers: {
                        'Authorization': `Bearer ${AccessToken}`
                    }
                })

                if (UserGuilds.data) {
                    const AccessToken = await Output.data.access_token;

                    const UserConnections = await axios.get('https://discord.com/api/v10/users/@me/connections', {
                        headers: {
                            'Authorization': `Bearer ${AccessToken}`
                        }
                    })

                    res.json({
                        Status: 200,
                        StatusText: 'OK',
                        OutputInfo: Output.data,
                        UserInfo: UserInfo.data,
                        UserConnections: UserConnections.data,
                        UserGuilds: UserGuilds.data
                    })
                }
            }
        }
    }
})

export default Router