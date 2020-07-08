const config = require("./config");
const fs = require("fs");
const path = require("path");

const posts = fs.readdirSync(config.dev.postsdir)
    .map(post => post.slice(0, -3)); 

const clean = () => {
    posts.forEach(post => {
        const file = path.join(config.dev.destdir, `${post}.html`);
        console.log(`Removing file: ${file}`);
        fs.unlink(path.join(file), e => { if (e) throw e; });
    });
};

clean();

module.exports = clean;
