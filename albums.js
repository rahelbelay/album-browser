  
const albumsData = require('./albumsData.json')

function getAlbums() {
    const albumTitles = [];
    for (let album of albumsData.albums) {
      albumTitles.push(album.title);
    }
    return albumTitles;
};
//getAlbums();

function getSongsForAlbum(albumID) {
    for (let item of albumsData.albums) {
        console.log(item.id);
        if (item.id == albumID) {
            return item.songs;
        }
    }
    console.log(albumID);

};
//getSongsForAlbum(1001);

module.exports = {
    getAlbums,
    getSongsForAlbum
}