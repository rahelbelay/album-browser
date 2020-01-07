const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();
const albums = require('./albums.js');

const server = http.createServer(app);

app.get('/', (req, res) => {
    console.log('Got a request!!!');
    res.send('Hello Express!');
});

app.get('/albums', (req, res) => {
    res.send(albums.getAlbums());
});

// :albumID is a *placeholder*
// can't matcht the following: ? & = % /
app.get('/albums/:albumID', (req, res) => {
    res.send(albums.getSongsForAlbum(req.params.albumID));
});

// /albums/42/songs
// " the songs für album 42"

app.get('/albums/:albumID/songs', (req, res) => {
    res.send(`The songs for album ${req.params.albumID}`);
});

app.get('/albums/:albumID/songs/guest', (req, res) => {
    res.send('It had the best guest artists ever');
});

// albums/42/songs/3
// "song 3 on album 42"

app.get('/albums/:albumID/songs/:songID(\\d+)', (req, res) => {
    res.send(`Song ${req.params.songID} on album ${req.params.albumID}`);
});

// important: leading slash
// also important: order!

// add a catch-all
// - order matters. If this route handler is run by express, that means, nothing above matched
// - '*' will match anything
// - res has methods....

app.get('*', (req, res) => {
    console.log('Redirecting, because no site here')
    res.redirect('/');
});



server.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});