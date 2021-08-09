# TGVCBot (Beta)

[![Deploy to Heroku](https://github.com/NeuroticCoders/LyciaMusicBot/actions/workflows/heroku.yml/badge.svg?branch=main)](https://github.com/NeuroticCoders/LyciaMusicBot/actions/workflows/heroku.yml)
[![TypeScript Build](https://github.com/NeuroticCoders/LyciaMusicBot/actions/workflows/typescript.yml/badge.svg?branch=main)](https://github.com/NeuroticCoders/LyciaMusicBot/actions/workflows/typescript.yml)

![LOGO](https://telegra.ph/file/4a058c58b9e783da5d184.jpg)


### Requirements ([wiki](../../wiki/Requirements))

- FFMPEG
- NodeJs > V14. (Latest is better)
- Yarn (Optional)

### Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/NeuroticCoders/LyciaMusicBot)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FNeuroticCoders%2FLyciaMusicBot&envs=API_ID%2CAPI_HASH%2CBOT_TOKEN%2CLOG_CHANNEL%2CSESSION%2CCODEC&optionalEnvs=CODEC&API_IDDesc=Get+API_ID+from+https%3A%2F%2Fmy.telegram.org%2Fapps.&API_HASHDesc=Get+API_HASH+from+https%3A%2F%2Fmy.telegram.org%2Fapps.&BOT_TOKENDesc=Bot+Token+from+%40BotFather&LOG_CHANNELDesc=LOG+Channel+ID+%28Make+sure+bot+and+VC+User+are+added+in+the+group%29&SESSIONDesc=GramJS%2FTelethon+Session+of+the+VC+User%22&CODECDesc=Custom+FFMPEG+Codec)

## Bot Usage

- `/jiosaavn | /jsvn <song name>` : Play Song from JioSaavn.
- `/ytplay | /play <song name | link>`: Play Song from Youtube.
- `/queue | /q` : Show Queue List
- `/pause | /p` : Pause the Stream
- `/resume | /r` : Resume the Stream
- `/skip | /next` : Skip the Stream
- `/stopvc` : Stop the Stream

## Thanks to
- [@cachecleanerjeet](https://github.com/cachecleanerjeet) for [JioSaavn API](https://github.com/cachecleanerjeet/JiosaavnAPI)
- Respective devs of all the packages/libraries used.
