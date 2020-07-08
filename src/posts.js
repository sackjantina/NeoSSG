const config = require("./config");
const fs = require("fs");
const fm = require("front-matter");
const marked = require("./marked");
const navbar = require("./navbar");
const footer = require("./footer");

const posthtml = data => 
`<!DOCTYPE html>
<html lang='en'>
    <head>
        <title>${data.attributes.title}</title>
    	<link rel="stylesheet" type="text/css" href="${config.dev.cssdir}/style1.css" />
        <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Press+Start+2P&family=Roboto+Mono:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>
    	<header>
            <div class="bar">
                <h1>Welcome to the Cyber Jungle</h1>
                ${navbar}
            </div>
    	</header>
        <div class="main">
            <h1>${data.attributes.title}</h1>
            <p>${new Date(parseInt(data.attributes.date)).toDateString()}</p>
            ${data.body}
        </div>

        ${footer}

    </body>
</html>
`;

const createPost = postPath => {
    const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf-8");
    const content = fm(data); 
    content.body = marked(content.body);
    content.path = postPath;
    return content;
};

const createPosts = posts => {
    posts.forEach(post => {
        /* if (!fs.existsSync(`${config.dev.destdir}/${post.path}`))
            fs.mkdirSync(`${config.dev.destdir}/${post.path}`); */
        fs.writeFile(
            `${config.dev.destdir}/${post.path}.html`,
            posthtml(post),
            e => {
                if (e) throw e;
                console.log(`${post.path}.html was created successfully`);
            }
        );
    });
};

module.exports = {
    createPost: createPost,
    createPosts: createPosts
};
