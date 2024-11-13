# spotify-get-track-info
Spotify get track info

## Install

```bash
npm i spotify-get-track-info
```

## Examples

```bash
// CommonJS
const { getTrackInfo } = require('spotify-get-track-info')
// ES6
import { getTrackInfo } from "spotify-get-track-info"

const trackInfo = await getTrackInfo("1gar5NDxG2UBBdZSVYeVhI")
console.log(trackInfo)
```

## Output

```bash
{
    "trackColor": "#282828",
    "trackData": {
        "type": "track",
        "name": "พูดไม่ได้",
        "uri": "spotify:track:1gar5NDxG2UBBdZSVYeVhI",
        "id": "1gar5NDxG2UBBdZSVYeVhI",
        "title": "พูดไม่ได้",
        "artists": [
            {
                "name": "Potato",
                "uri": "spotify:artist:6RQyog3L4JlA8t8Bf56otE"
            }
        ],
        "coverArt": null,
        "releaseDate": {
            "isoString": "2021-11-14T00:00:00Z"
        },
        "duration": 291075,
        "maxDuration": 291075,
        "isPlayable": true,
        "isExplicit": false,
        "audioPreview": {
            "url": "https://p.scdn.co/mp3-preview/07f778b20bd10b6a4c917e3f9e74a994d220d208"
        },
        "hasVideo": false,
        "visualIdentity": {
            "backgroundBase": {
                "alpha": 255,
                "blue": 80,
                "green": 93,
                "red": 0
            },
            "backgroundTintedBase": {
                "alpha": 255,
                "blue": 46,
                "green": 57,
                "red": 0
            },
            "textBase": {
                "alpha": 255,
                "blue": 255,
                "green": 255,
                "red": 255
            },
            "textBrightAccent": {
                "alpha": 255,
                "blue": 255,
                "green": 255,
                "red": 255
            },
            "textSubdued": {
                "alpha": 255,
                "blue": 205,
                "green": 223,
                "red": 119
            },
            "image": [
                {
                    "url": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0289bfa76c6fc0ccfb08e7f29e",
                    "imageFormat": "JPEG",
                    "maxHeight": 300,
                    "maxWidth": 300
                },
                {
                    "url": "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000485189bfa76c6fc0ccfb08e7f29e",
                    "imageFormat": "JPEG",
                    "maxHeight": 64,
                    "maxWidth": 64
                },
                {
                    "url": "https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b27389bfa76c6fc0ccfb08e7f29e",
                    "imageFormat": "JPEG",
                    "maxHeight": 640,
                    "maxWidth": 640
                }
            ]
        },
        "relatedUri": "spotify:artist:6RQyog3L4JlA8t8Bf56otE",
        "embeded_uri": "spotify:track:1gar5NDxG2UBBdZSVYeVhI",
        "backgroundColor": "#282828"
    }
}
```