const config = require("./config");
const fs = require("fs");
const navbar = require("./navbar");

const homepage = posts =>
`<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="${config.siteDescription}" />
   <title>${config.siteName}</title>
   <link rel="stylesheet" type="text/css" href="${config.dev.cssdir}/style1.css?version=1"/>
</head>
<body>
    <header>
        <div class="bar">
            <h1>Welcome to the Cyber Jungle</h1>
            ${navbar}
        </div>
    </header>

    <div class="main">
        <div class="posts">
            ${posts.map(
                post => `<div class="post">
                <h3><a href="./${post.path}.html">${post.attributes.title}</a></h3>
                <small>${new Date(parseInt(post.attributes.date)).toDateString()}</small>
                <p>${post.attributes.description}</p>
                </div>`
            ).join("")}
        </div>
    </div>

    <footer>
    	${`<p>© ${new Date().getFullYear()} ${config.siteAuthor}</p>`}
    </footer>
</body>
</html>
`;

const addHomePage = posts => {
    fs.writeFile(`${config.dev.destdir}/index.html`, homepage(posts), e => {
        if (e) throw e;
        console.log(`index.html was created successfully`);
    });
};

module.exports = addHomePage;
