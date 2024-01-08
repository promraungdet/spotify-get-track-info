export {};

declare global {
    interface artistData {
        name: string
        uri: string
    }

    interface sourceData {
        url: string
        width: number
        height: number
    }

    interface trackData {
        type: string
        name: string
        uri: string
        id: string
        title: string
        artists: artistData[]
        coverArt: {
            extractedColors: {
                colorDark: {
                    hex: string
                }
                colorLight: {
                    hex: string
                }
            }
            sources: sourceData[]
        }
        releaseDate: {
            isoString: string
        }
        duration: number
        maxDuration: number
        isPlayable: boolean
        isExplicit: boolean
        audioPreview: {
            url: string
        }
        hasVideo: boolean,
        relatedUri: string
        embeded_uri: string
        backgroundColor: string
    }
}