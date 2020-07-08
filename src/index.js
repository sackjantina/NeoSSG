const config = require("./config");
const fs = require("fs");
const postMethods = require("./posts");
const addHomePage = require("./homepage");

const posts = fs
    .readdirSync(config.dev.postsdir)
    .map(post => post.slice(0, -3))
    .map(post => postMethods.createPost(post)); 

console.log(posts);

console.log(`Source directory: ${config.dev.postdir}`);
console.log(`Destination Directory: ${config.dev.destdir}`);

if (!fs.existsSync(config.dev.destdir))
    fs.mkdirSync(config.dev.destdir);

postMethods.createPosts(posts);
addHomePage(posts);

