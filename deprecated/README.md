# 📝 Blog Template Developer Guide

This guide helps you write and structure blog posts using our standardized template. Follow the class naming and layout conventions to maintain consistency.


## Getting Started

1. Navigate to: `views/blog/article-template.ejs`
2. **Duplicate** the file
3. **Rename** it based on your blog topic (e.g., `hsc-admission-guide.ejs`)
4. Update all meta tags at the top:
   - Title, description, keywords
   - Open Graph and Twitter tags
5. Follow the in-file comments for guidance


## Page Structure

🏷️ Header Section
```html
<div class="article-header">
  <nav class="article-breadcrumb">
    <a class="breadcrumb-main">Blog</a> → 
    <a class="breadcrumb-sub">Category</a>
  </nav>
  <h1 class="article-title">Your Article Title</h1>
  <div class="article-meta">
    <img class="author-image" src="author.jpg" width="32" height="32">
    <span class="author-name">Author Name</span>
    <span class="publish-date">MMM DD, YYYY • X min read</span>
  </div>
</div>
```

🖼️ Cover Image
```html
<div class="article-cover">
  <!-- Use a clear, engaging image -->
  <img src="cover-image.jpg" alt="Article cover">
</div>
```

📝 Body Content
```html
<div class="article-body">
  <aside class="article-toc">...</aside>
  <main class="article-content">
    <!-- Your content goes here -->
  </main>
</div>
```

✍️ Content Formatting Guide
📝 Paragraphs
```html
<div class="article-para">
  <p class="article-para-text">Your paragraph text...</p>
</div>
```

🏷️ Headings (with TOC anchors)
```html
<h2 id="section1" class="article-heading--h2">Main Section</h2>
<h3 id="subsection1" class="article-heading--h3">Subsection</h3>
<h4 id="detail1" class="article-heading--h4">Details</h4>
```

📋 Lists
```html
<ul class="article-list article-list--unordered">
  <li>Bullet point</li>
</ul>

<ol class="article-list article-list--ordered">
  <li>Numbered step</li>
</ol>
```

💬 Quotes
```html
<blockquote class="article-quote">
  Important note or quotation...
</blockquote>
```

🅰️ Drop Caps
```html
<p class="article-para">
  <span class="article-para-word-cap">F</span>irst word emphasized...
</p>
```

🖼️ Images
```html
<!-- Simple image -->
<img class="article-image" src="image.jpg" alt="Description">

<!-- With caption -->
<figure class="article-image--captioned">
  <img class="article-image" src="image.jpg" alt="Description">
  <figcaption class="article-image--caption">Caption text</figcaption>
</figure>
```

💻 Code
```html
<!-- Block code -->
<pre class="article-code"><code>your.code.here();</code></pre>

<!-- Inline code -->
<code class="article-inline-code">variableName</code>
```

🔗 Links
```html
<a href="url" class="article-link">Link Text</a>
```

📊 Tables
```html
<table class="article-table">
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
  </tbody>
</table>
```

▶️ Videos
```html
<div class="article-video-wrapper">
  <div class="article-video">
    <iframe src="youtube-embed-url"></iframe>
  </div>
</div>
```


## Blog File Route 

In `server/blogRouter.js` file, you have to add a blog route
```js
/* 
- copy and paste this route inside the blogRouter function 
- make sure to give a suitable blog route name, we prefer to name it after the blog file's name
- make sure to write the correct blog file name (without the extension .ejs) inside res.render()
*/
router.get("/<blog-title>", (req, res) => {
    res.render("blogs/<blog-file-name>");
});
```


<hr style="height: 1px; background-color: #333; border: none;">

### 📱 Responsiveness
The template automatically adapts for mobile:
- TOC moves below the article
- Fonts scale down appropriately
- Media elements resize automatically


### ✅ Publishing Checklist <br>
✔️ Template duplicated and renamed <br>
✔️ Meta tags updated <br>
✔️ Correct classes used throughout <br>
✔️ ID values added to all sections for TOC <br>
✔️ Mobile layout verified 


### 🆘 Support
For any questions or new component requests:
- Contact the Dev Lead
- Consult the Design Team
- Reference this guide


<br>
<hr>

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
  <img src="https://storage.googleapis.com/noteroom-fb1a7.appspot.com/Assets/ng_logo.png" 
       alt="Noteroom Logo" width="100" height="100" />

  <p style="font-size: 16px; font-weight: 400; margin-top: 10px;">
    Maintained by <span style="font-size: 20px; font-weight: 600;">NoteRoom</span>
  </p>
</div>

<hr>
