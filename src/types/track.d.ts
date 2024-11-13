export {};

declare global {
    interface artistData {
        name: string
        uri: string
    }

    interface sourceData {
        url: string
        maxWidth: number
        maxHeight: number
        imageFormat: "JPEG" | "PNG" | "WEBP",
    }

    interface trackData {
        type: string
        name: string
        uri: string
        id: string
        title: string
        artists: artistData[]
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
        visualIdentity: {
            backgroundBase: {
                red: number
                green: number
                blue: number
                alpha: number
            }
            backgroundTintedBase: {
                red: number
                green: number
                blue: number
                alpha: number
            }
            textBase: {
                red: number
                green: number
                blue: number
                alpha: number
            }
            textBrightAccent: {
                red: number
                green: number
                blue: number
                alpha: number
            }
            textSubdued: {
                red: number
                green: number
                blue: number
                alpha: number
            }
            image: sourceData[]
        }
    }
}