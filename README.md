# cowtopia-bot

cowtopia-bot is a Telegram automation tool designed to help you manage and interact with [catopia bot](https://t.me/catopia_game_bot/catopia?startapp=CatRefId9037BE85).

<p align="center">
  <img src="public/catopia.png" alt="cowtopia" width="300"/>
</p>

### Features

- Auto claim Daily Rewards
- Auto buy plant
- Auto Claim Plant
- Auto Claim Harvest
- support multi account

### How to use

you can clone repository and add your token authorization

- Clone repository

```bash
git clone https://github.com/anoderb/catopia-bot.git
```

- add config.json on folder configs

```json
[
  {
    "token": "eyJh"
  },
  {
    "token": "eyJh"
  }
]
```

- install modules

```bash
npm install
```

- running script

```bash
npm run start
```

[ WARNING ] this bot in development stage, if bot error you can try again. some error or bug will be fixed.

### Token authorization

You can found on inspact element [F12] from telegram web. open the bot and see [ `on Headers Authorization from api request from cowtopia` ]

- `Authorization: eyJ..`

- example Authorization

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfYWRkcmVzcyI6IjB4ZkM3NEQzMkY3NzZBNDY5NzQ2ODA5MmI3ZmUzYzRjMDk4ODIzNTk3OSIsInVzZXJfaWQiOiI2NjcyNWJjMTQzNDRhZTJmMWEwNDdmZjUiLCJ0Z19pZCI6IjE0OTMyMzExMTUiLCJ1c2VybmFtZSI6IjE0OTMyMzExMTUiLCJpYXQiOjE3MjA1MTQ2MjAsImV4cCI6MTcyMTExOTQyMH0.1AE50yLVEw_Eda1NbpvyojhQ0oLq4hm8vJEAXKx8zMA"
```

### Contact

You can contact me for more information or report an issue.

- [GitHub](https://github.com/anoderb)

- [Telegram](https://t.me/khmdsy)
