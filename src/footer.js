const config = require("./config");

const footerhtml =
`<footer>
    <p>© ${new Date().getFullYear()} ${config.siteAuthor}</p>
    <img src="${config.dev.imgsdir}/cowboy.png" alt="Picture of a Cowboy" style="float:right; height:25px; width:20px;">
</footer>
`;

module.exports = footerhtml;
