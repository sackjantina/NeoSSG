# NEO Static Site Generator

---

This is the source code for my static site generator that takes markdown files from one folder and populates another folder with their HTML equivalents.

Notes:

* YAML information is extracted from the beginning of each markdown file. The format is similar to this:


    ---
    title: "Whatever the title of the article is"
    date: \<time in epoch format, aka a really big number corresponding to seconds\>
    descrption: "A short description of what the article is about
    ---


* This information is parsed and displayed on the homepage for now
