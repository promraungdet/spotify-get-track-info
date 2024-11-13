import fetch from 'node-fetch'

const getTrackInfo = async (trackId: string): Promise<trackData | undefined> => {
    try {
        const url = `https://open.spotify.com/embed/track/${trackId}`
        const resp = await fetch(url);
        const text = await resp.text();
        const match = text.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s);
        if (match) {
            const jsonString = match[1];
            const jsonParse = JSON.parse(jsonString);
            const jsonData = jsonParse.props.pageProps.state.data;
            const data = {
                ...jsonData.entity,
                relatedUri: jsonData.entity.relatedEntityUri,
                embeded_uri: jsonData.embeded_entity_uri,
                backgroundColor: jsonData.backgroundColor,
            }
            delete data["embeded_entity_uri"];
            delete data["defaultAudioFileObject"];
            delete data["relatedEntityUri"];
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
};

export {
    getTrackInfo
};