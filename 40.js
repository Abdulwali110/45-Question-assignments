var make_album = function (artist, album, tracks) {
    var albumReturn = {
        artist: artist,
        album: album,
    };
    if (tracks !== undefined) {
        albumReturn.track = tracks;
    }
    return albumReturn;
};
console.log(make_album("Abdullah", "kahani"));
console.log(make_album("Hussain", "chidhod", 9));
console.log(make_album("Wali", "kahani suno"));
console.log(make_album("jwk", "do you love me", 4));
