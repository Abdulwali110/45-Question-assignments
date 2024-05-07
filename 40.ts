type Albums = {
     artist: string;
     album: string;
     track?: number 
 }
 const make_album = (artist: string, album: string, tracks?: number): Albums => {
     let albumReturn: Albums = {
         artist: artist,
         album: album,
     }
     if (tracks !== undefined) {
         albumReturn.track = tracks
     }
     return albumReturn
 }
 console.log(make_album("Abdullah", "kahani"));
 console.log(make_album("Hussain", "chidhod", 9)); 
 console.log(make_album("Wali", "kahani suno"));
 console.log(make_album("jwk", "do you love me", 4));