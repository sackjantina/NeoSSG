const config = require("./config");
const fs = require("fs");

const navbar = fs
    .readdirSync(config.dev.postsdir)
    .map(post => post.slice(0, -3))
    .map(post => post = {
        html: `<a href="./${post}.html">${post}</a>` 
    });

console.log(navbar); 

const pages = config.dev.pages.map(page => {
    return page
});

console.log(pages);

const navbarhtml = 
`${pages.map(page => { return `<a href="${page.path}">${page.name}</a>` }).join('\n')}
<div class="dropdown">
    <a href="#">articles</a>
    <div class="dropdown-content">
    ${navbar.map(item => { return item.html; }).join(`\n`)}
    </div>
</div>
`;

const test = arg => {`${arg}`};

/* console.log(test(navbar)); */
console.log(navbarhtml); 

module.exports = navbarhtml;
