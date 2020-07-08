const config = {
    siteName: "Cyber Cowboy",
    siteDescription: "",
    siteAuthor: "Jack Santina",
    dev: {
        postsdir: "./content",
        destdir: "./live",
    	imgsdir: "../images",
    	cssdir: "../css",
        pages: [
            home = { 
                name: "home",
                path: "./index.html" 
            },
            about = { 
                name: "about me",
                path: "#" 
            },
            contact = { 
                name: "contact",
                path: "#" 
            }
        ]
    }
};

module.exports = config;
