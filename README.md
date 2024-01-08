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

const trackInfo = await getTrackInfo("1WJ5tWjTdfywqMANcu7jXi")
console.log(trackInfo)

//With CORS Proxy
// CommonJS
const { getTrackInfo } = require('spotify-get-track-info')
// ES6
import { getTrackInfo } from "spotify-get-track-info"

const trackInfo = await getTrackInfo("1WJ5tWjTdfywqMANcu7jXi", true)
console.log(trackInfo)
```

## Output

```bash
{
    "type": "track",
    "name": "เอาความเสียใจมาไว้ที่ฉัน (Vasopressin)",
    "uri": "spotify:track:1WJ5tWjTdfywqMANcu7jXi",
    "id": "1WJ5tWjTdfywqMANcu7jXi",
    "title": "เอาความเสียใจมาไว้ที่ฉัน (Vasopressin)",
    "artists": [
        {
            "name": "AYLA's",
            "uri": "spotify:artist:2XiaPu2j4nBMhF8pIlt6Bk"
        }
    ],
    "coverArt": {
        "extractedColors": {
            "colorDark": {
                "hex": "#701010"
            },
            "colorLight": {
                "hex": "#E82121"
            }
        },
        "sources": [
            {
                "url": "https://i.scdn.co/image/ab67616d00001e027f295c63a1e655b7f3e6f36a",
                "width": 300,
                "height": 300
            },
            {
                "url": "https://i.scdn.co/image/ab67616d000048517f295c63a1e655b7f3e6f36a",
                "width": 64,
                "height": 64
            },
            {
                "url": "https://i.scdn.co/image/ab67616d0000b2737f295c63a1e655b7f3e6f36a",
                "width": 640,
                "height": 640
            }
        ]
    },
    "releaseDate": {
        "isoString": "2023-11-17T00:00:00Z"
    },
    "duration": 274000,
    "maxDuration": 274000,
    "isPlayable": true,
    "isExplicit": false,
    "audioPreview": {
        "url": "https://p.scdn.co/mp3-preview/50a0a245a30be045a717196486452fafb56eb97e"
    },
    "hasVideo": false,
    "relatedUri": "spotify:artist:2XiaPu2j4nBMhF8pIlt6Bk",
    "embeded_uri": "spotify:track:1WJ5tWjTdfywqMANcu7jXi",
    "backgroundColor": "#701010"
}
```
