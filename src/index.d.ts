/// <reference path="./types/track.d.ts" />

declare function getTrackInfo(trackId: string, proxy?: boolean): Promise<trackData | undefined>;

export { getTrackInfo };