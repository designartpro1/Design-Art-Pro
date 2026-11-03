import { TutorialLesson } from '../types';

export const comprehensiveTutorials: TutorialLesson[] = [
  // ==========================================
  // HTML TUTORIAL (22 TOPICS)
  // ==========================================
  {
    id: 'html-home',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-home',
    title: 'HTML Home',
    description: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website.',
    content: [
      'HTML stands for Hyper Text Markup Language. It describes the structure of a Web page and consists of a series of elements that tell the browser how to display content.',
      'In this tutorial, you will learn HTML from basic tags to interactive forms and modern semantic layouts.',
      'Every chapter includes practical examples that you can edit and run live in our DesignArtPro side-by-side Tryit Editor!'
    ],
    code: {
      mode: 'web',
      html: `<!DOCTYPE html>
<html>
<head>
  <title>DesignArtPro First Page</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph in DesignArtPro HTML studio.</p>
</body>
</html>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; color: #1e1b4b; }
h1 { color: #9333ea; }
p { color: #475569; }`
    },
    keyPoints: [
      'HTML is easy to learn — you will enjoy it!',
      'All web pages are built upon HTML structure',
      'You can test code instantly with the green Run Code button'
    ],
    exercise: {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Modern Language',
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language'
      ],
      correctIndex: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, defining the standard format for web documents.'
    }
  },
  {
    id: 'html-intro',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-intro',
    title: 'HTML Introduction',
    description: 'Learn what HTML is, how it works in web browsers, and the anatomy of an HTML document.',
    content: [
      'An HTML element is defined by a start tag, some content, and an end tag: `<tagname>Content goes here...</tagname>`.',
      'The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly without rendering the raw HTML tags.',
      'The HTML page structure features `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.'
    ],
    code: {
      mode: 'web',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <h1>DesignArtPro Introduction</h1>
  <p>Web browsers do not display HTML tags, but use them to render page content.</p>
</body>
</html>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
h1 { color: #04AA6D; }`
    },
    keyPoints: [
      'The <!DOCTYPE html> declaration defines that this document is an HTML5 document',
      'The <html> element is the root element of an HTML page',
      'The <head> element contains meta information about the HTML page',
      'The <body> element defines the document body and contains all visible content'
    ],
    exercise: {
      question: 'Which HTML element contains the visible contents of the web page?',
      options: ['<head>', '<body>', '<title>', '<meta>'],
      correctIndex: 1,
      explanation: 'The <body> tag defines the document body and houses headings, paragraphs, images, tables, and links.'
    }
  },
  {
    id: 'html-editors',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-editors',
    title: 'HTML Editors',
    description: 'Learn how to write and edit HTML using web editors like DesignArtPro, VS Code, or Notepad.',
    content: [
      'Web pages can be created and modified by using professional HTML editors or simple text editors.',
      'DesignArtPro provides a built-in side-by-side Tryit Editor with live output, so you do not need to install local software to start learning.',
      'To build websites locally on your computer, popular free editors include VS Code, Sublime Text, and Notepad++.'
    ],
    code: {
      mode: 'web',
      html: `<div class="editor-demo">
  <h2>DesignArtPro Online Workspace</h2>
  <p>Write code on the left, see output on the right!</p>
  <button onclick="alert('Editor is live!')">Click Me</button>
</div>`,
      css: `.editor-demo { padding: 24px; border: 2px dashed #9333ea; border-radius: 16px; text-align: center; font-family: sans-serif; }
button { background: #04AA6D; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }`
    },
    keyPoints: [
      'HTML files must be saved with .html or .htm file extensions',
      'UTF-8 is the recommended character encoding',
      'DesignArtPro Tryit Editor allows real-time interactive testing'
    ]
  },
  {
    id: 'html-basic',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-basic',
    title: 'HTML Basic',
    description: 'The fundamental building blocks of HTML: headings, paragraphs, links, and images.',
    content: [
      'All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.',
      'Headings are defined with `<h1>` to `<h6>`. `<h1>` defines the most important heading.',
      'Paragraphs are defined with the `<p>` tag.',
      'HTML links are defined with the `<a>` tag, and images are defined with the `<img>` tag.'
    ],
    code: {
      mode: 'web',
      html: `<h1>Primary Heading</h1>
<p>This is a standard text paragraph.</p>
<a href="https://wa.me/923440665646" target="_blank">Contact DesignArtPro on WhatsApp</a>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
a { color: #04AA6D; font-weight: bold; text-decoration: none; }
a:hover { text-decoration: underline; }`
    },
    keyPoints: [
      'Links use the href attribute to specify destination URLs',
      'Images use the src and alt attributes',
      'Headings automatically add vertical margins'
    ]
  },
  {
    id: 'html-elements',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-elements',
    title: 'HTML Elements',
    description: 'An HTML element is defined by a start tag, content, and an end tag.',
    content: [
      'HTML elements can be nested, meaning elements can contain other elements.',
      'All HTML documents consist of nested HTML elements, such as the `<body>` element containing `<p>` and `<h1>`.',
      'Empty elements have no content and no closing tag, such as `<br>` for a line break or `<hr>` for a horizontal divider.'
    ],
    code: {
      mode: 'web',
      html: `<div>
  <h2>Nested Element Example</h2>
  <p>This paragraph contains <strong>bold text</strong> and <em>italicized text</em> inside it.</p>
  <hr>
  <p>Here is content after an empty horizontal rule tag.</p>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
h2 { color: #9333ea; }`
    },
    keyPoints: [
      'Never skip end tags to prevent unexpected layout rendering',
      'HTML is not case-sensitive, but lowercase tags are standard',
      'Empty elements like <br> can be written as self-closing in XML/XHTML'
    ]
  },
  {
    id: 'html-attributes',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-attributes',
    title: 'HTML Attributes',
    description: 'Attributes provide additional information about HTML elements.',
    content: [
      'All HTML elements can have attributes.',
      'Attributes are always specified in the start tag and usually come in name/value pairs like: `name="value"`.',
      'Common attributes include `href` (for links), `src` (for image sources), `width` & `height`, `alt` (alternative text for accessibility), `style`, `id`, and `class`.'
    ],
    code: {
      mode: 'web',
      html: `<a href="mailto:designartpro1@gmail.com" title="Send Official Email" class="email-link">
  Email DesignArtPro Studio
</a>
<p id="infoParagraph" data-studio="DesignArtPro">Attributes configure element identity, styling, and interactivity.</p>`,
      css: `.email-link { background: #9333ea; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; }
p { font-family: system-ui, sans-serif; color: #475569; margin-top: 14px; }`
    },
    keyPoints: [
      'Always quote attribute values using double quotes',
      'The alt attribute specifies an alternate text for an image if it cannot be displayed',
      'The title attribute displays a tooltip when you hover over the element'
    ]
  },
  {
    id: 'html-headings',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-headings',
    title: 'HTML Headings',
    description: 'HTML headings are titles or subtitles that you want to display on a webpage.',
    content: [
      'Search engines use headings to index the structure and content of your web pages.',
      'Use HTML headings for headings only. Do not use headings to make text BIG or bold. Use CSS for font styling.',
      'Each HTML page should have one primary `<h1>` heading, followed by `<h2>` for major sections and `<h3>` for sub-sections.'
    ],
    code: {
      mode: 'web',
      html: `<h1>Heading 1 — Top Level</h1>
<h2>Heading 2 — Main Section</h2>
<h3>Heading 3 — Sub-Section</h3>
<h4>Heading 4 — Group Topic</h4>
<h5>Heading 5 — Minor Header</h5>
<h6>Heading 6 — Footnote Tag</h6>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
h1 { color: #9333ea; border-bottom: 2px solid #f3e8ff; padding-bottom: 6px; }
h2 { color: #ec4899; }
h3 { color: #04AA6D; }`
    },
    keyPoints: [
      '<h1> defines the most important heading; <h6> defines the least important',
      'Browsers automatically add margin before and after headings',
      'Maintain logical hierarchy for SEO and accessibility'
    ]
  },
  {
    id: 'html-paragraphs',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-paragraphs',
    title: 'HTML Paragraphs',
    description: 'The HTML <p> element defines a paragraph.',
    content: [
      'A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.',
      'Browsers automatically remove extra spaces and lines when the page is displayed.',
      'To insert a line break without starting a new paragraph, use the `<br>` tag.'
    ],
    code: {
      mode: 'web',
      html: `<p>This is paragraph one explaining creative coding workflows.</p>
<p>This is paragraph two with a forced<br>line break right in the middle.</p>
<pre>The pre element preserves
   both spaces
      and line breaks.</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; color: #334155; }
pre { background: #f1f5f9; padding: 12px; border-radius: 8px; font-family: monospace; }`
    },
    keyPoints: [
      '<p> starts a block-level paragraph',
      '<br> creates an inline line break',
      '<pre> displays text in a fixed-width font and preserves spaces and breaks'
    ]
  },
  {
    id: 'html-styles',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-styles',
    title: 'HTML Styles',
    description: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more.',
    content: [
      'Setting the style of an HTML element can be done with the `style` attribute.',
      'The HTML style attribute has the following syntax: `<tagname style="property:value;">`.',
      'Common properties: `background-color`, `color`, `font-family`, `font-size`, `text-align`.'
    ],
    code: {
      mode: 'web',
      html: `<h2 style="color: #9333ea; font-family: sans-serif;">Purple Studio Heading</h2>
<p style="color: #475569; font-size: 16px;">This paragraph uses inline styling for color and size.</p>
<div style="background-color: #f3e8ff; padding: 16px; border-radius: 12px; text-align: center;">
  <strong style="color: #7e22ce;">Box styled with background-color and text-align.</strong>
</div>`,
      css: `body { margin: 0; padding: 16px; }`
    },
    keyPoints: [
      'Inline styles are great for quick prototyping or email templates',
      'For large applications, external CSS classes are preferred',
      'Multiple style properties are separated with semicolons'
    ]
  },
  {
    id: 'html-formatting',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-formatting',
    title: 'HTML Formatting',
    description: 'HTML contains several elements for defining user text with special meaning.',
    content: [
      'HTML uses elements like `<b>` and `<strong>` for bold text, and `<i>` and `<em>` for italicized text.',
      '`<strong>` defines text with strong importance (semantic emphasis).',
      '`<mark>` defines highlighted text, `<small>` defines smaller text, `<del>` defines deleted/struck-through text, `<ins>` defines inserted text, and `<sub>`/`<sup>` define subscript and superscript.'
    ],
    code: {
      mode: 'web',
      html: `<p>We offer <b>bold design</b> and <strong>strong digital presence</strong>.</p>
<p>Enjoy <em>emphasized typography</em> and <i>italic branding</i>.</p>
<p>Sale price: <del>$199</del> <ins>$149</ins> USD with <mark>special launch discount</mark>!</p>
<p>Chemical formula: H<sub>2</sub>O | Mathematics: 2<sup>3</sup> = 8</p>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; line-height: 1.6; color: #1e293b; }
mark { background: #fef08a; padding: 2px 6px; border-radius: 4px; }`
    },
    keyPoints: [
      '<b> and <i> describe visual presentation',
      '<strong> and <em> convey semantic importance to screen readers',
      '<del> and <ins> represent content revisions'
    ]
  },
  {
    id: 'html-quotations',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-quotations',
    title: 'HTML Quotations',
    description: 'HTML quotation and citation elements: <blockquote>, <q>, <abbr>, <address>, <cite>, and <bdo>.',
    content: [
      'The HTML `<blockquote>` element defines a section that is quoted from another source. Browsers usually indent blockquote elements.',
      'The HTML `<q>` tag defines a short inline quotation.',
      'The HTML `<abbr>` tag defines an abbreviation or an acronym with a tooltip definition.'
    ],
    code: {
      mode: 'web',
      html: `<blockquote cite="https://designartpro.com">
  "Creative coding bridges visual artistry with logical systems architecture."
</blockquote>
<p>The director said, <q>Quality design inspires confidence.</q></p>
<p>Learn <abbr title="HyperText Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> at DesignArtPro.</p>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; color: #334155; }
blockquote { border-left: 4px solid #9333ea; margin: 0 0 16px 0; padding: 8px 16px; background: #faf5ff; font-style: italic; }`
    },
    keyPoints: [
      '<blockquote> is block-level for lengthy quotations',
      '<q> is inline and automatically inserts quotation marks',
      '<abbr> provides helpful tooltips on hover'
    ]
  },
  {
    id: 'html-comments',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-comments',
    title: 'HTML Comments',
    description: 'HTML comments are not displayed in the browser, but they help document your HTML source code.',
    content: [
      'You can add comments to your HTML source by using the following syntax: `<!-- Write your comments here -->`.',
      'Notice that there is an exclamation point (!) in the start tag, but not in the end tag.',
      'Comments are also great for debugging HTML, because you can comment out HTML lines of code one at a time to search for errors.'
    ],
    code: {
      mode: 'web',
      html: `<!-- 🎨 DesignArtPro Studio Header Section -->
<h2>Visible Title</h2>
<!-- <p>This paragraph is currently commented out and hidden.</p> -->
<p>This paragraph is live and rendered by the web browser.</p>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; color: #0f172a; }`
    },
    keyPoints: [
      'Comments help teammates understand the code architecture',
      'Comments can span across multiple lines',
      'Never put sensitive information or passwords in HTML comments'
    ]
  },
  {
    id: 'html-colors',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-colors',
    title: 'HTML Colors',
    description: 'HTML colors are specified with predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.',
    content: [
      'HTML supports 140 standard color names (e.g. Tomato, DodgerBlue, MediumSeaGreen).',
      'In modern web development, HEX colors (`#9333ea`, `#04AA6D`) and RGB (`rgb(147, 51, 234)`) are standard.',
      'RGBA values allow transparency via an alpha channel from 0.0 (transparent) to 1.0 (opaque).'
    ],
    code: {
      mode: 'web',
      html: `<div style="background-color: #04AA6D; color: white; padding: 16px; margin-bottom: 8px; border-radius: 8px;">
  #04AA6D — W3 Green Action Color
</div>
<div style="background-color: #9333ea; color: white; padding: 16px; margin-bottom: 8px; border-radius: 8px;">
  #9333ea — DesignArtPro Purple
</div>
<div style="background-color: rgba(236, 72, 153, 0.2); color: #be185d; padding: 16px; border-radius: 8px; font-weight: bold;">
  rgba(236, 72, 153, 0.2) — Translucent Pink
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }`
    },
    keyPoints: [
      'HEX values use #RRGGBB format from 00 to FF',
      'RGB specifies red, green, and blue intensities from 0 to 255',
      'RGBA adds alpha transparency'
    ]
  },
  {
    id: 'html-css',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-css',
    title: 'HTML CSS',
    description: 'CSS stands for Cascading Style Sheets. CSS saves a lot of work by styling multiple web pages at once.',
    content: [
      'CSS can be added to HTML documents in 3 ways: Inline, Internal, and External.',
      'Inline: using the `style` attribute inside HTML elements.',
      'Internal: using a `<style>` element in the `<head>` section.',
      'External: using a `<link>` element to link to an external CSS file.'
    ],
    code: {
      mode: 'web',
      html: `<div class="card">
  <h3>Styled via CSS Class</h3>
  <p>External or internal CSS keeps HTML structure clean and decoupled from design.</p>
</div>`,
      css: `.card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  font-family: system-ui, sans-serif;
}
.card h3 { margin: 0 0 8px 0; color: #9333ea; }
.card p { margin: 0; color: #64748b; font-size: 14px; }`
    },
    keyPoints: [
      'External style sheets are stored in .css files',
      'The class selector starts with a period (.)',
      'The id selector starts with a hash symbol (#)'
    ]
  },
  {
    id: 'html-links',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-links',
    title: 'HTML Links',
    description: 'HTML links are hyperlinks. You can click on a link and jump to another document.',
    content: [
      'HTML links are defined with the `<a>` tag: `<a href="url">link text</a>`.',
      'The `href` attribute specifies the destination address.',
      'The `target` attribute specifies where to open the linked document: `_blank` opens the link in a new window or tab; `_self` opens in the same frame.'
    ],
    code: {
      mode: 'web',
      html: `<h3>Helpful Studio Links</h3>
<ul>
  <li><a href="https://wa.me/923440665646" target="_blank">Direct WhatsApp Chat</a></li>
  <li><a href="mailto:designartpro1@gmail.com">Send Email Enquiry</a></li>
  <li><a href="#services">Jump to Page Section (#services)</a></li>
</ul>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
a { color: #04AA6D; font-weight: bold; text-decoration: none; }
a:hover { text-decoration: underline; }
li { margin-bottom: 8px; }`
    },
    keyPoints: [
      'target="_blank" opens in a new tab',
      'Use mailto: to open email clients',
      'Bookmarks use href="#id" to jump to elements on the same page'
    ]
  },
  {
    id: 'html-images',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-images',
    title: 'HTML Images',
    description: 'Images can improve the design and appearance of a web page using the <img> tag.',
    content: [
      'The HTML `<img>` tag is used to embed an image in a web page.',
      'Images are not technically inserted into a web page; images are linked to web pages.',
      'The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.',
      'Two required attributes: `src` (path to image) and `alt` (alternate text for screen readers).'
    ],
    code: {
      mode: 'web',
      html: `<div class="image-box">
  <img 
    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80" 
    alt="Creative Studio Setup"
    class="responsive-img"
  />
  <p class="caption">DesignArtPro Creative Studio Workspace</p>
</div>`,
      css: `.image-box { max-width: 380px; font-family: system-ui, sans-serif; }
.responsive-img { width: 100%; border-radius: 16px; display: block; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.caption { font-size: 12px; color: #64748b; text-align: center; margin-top: 8px; }`
    },
    keyPoints: [
      'Always specify alt text for accessibility and SEO',
      'Set width and height to prevent page layout shifts during loading',
      'SVG images scale infinitely without pixelation'
    ]
  },
  {
    id: 'html-tables',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-tables',
    title: 'HTML Tables',
    description: 'HTML tables allow web developers to arrange data into rows and columns.',
    content: [
      'An HTML table is defined with the `<table>` tag.',
      'Each table row is defined with a `<tr>` tag. A table header is defined with a `<th>` tag. A table data/cell is defined with a `<td>` tag.',
      'By default, the text in `<th>` elements is bold and centered.',
      'Use `colspan` and `rowspan` to span across multiple columns or rows.'
    ],
    code: {
      mode: 'web',
      html: `<table class="pro-table">
  <thead>
    <tr>
      <th>Course Name</th>
      <th>Level</th>
      <th>Projects</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML5 & Semantic Web</td>
      <td>Beginner</td>
      <td>5</td>
      <td><span class="badge active">Available</span></td>
    </tr>
    <tr>
      <td>Modern CSS3 & Flexbox</td>
      <td>Intermediate</td>
      <td>8</td>
      <td><span class="badge active">Available</span></td>
    </tr>
    <tr>
      <td>JavaScript ES6+ Deep Dive</td>
      <td>Advanced</td>
      <td>12</td>
      <td><span class="badge active">Available</span></td>
    </tr>
  </tbody>
</table>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
.pro-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
.pro-table th { background: #f8fafc; padding: 12px; border-bottom: 2px solid #e2e8f0; color: #1e293b; font-weight: 700; }
.pro-table td { padding: 12px; border-bottom: 1px solid #f1f5f9; color: #475569; }
.badge { background: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 999px; }`
    },
    keyPoints: [
      'border-collapse: collapse removes double borders between cells',
      'Use <caption> to add a table title',
      'Use <thead>, <tbody>, and <tfoot> to partition tables cleanly'
    ]
  },
  {
    id: 'html-lists',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-lists',
    title: 'HTML Lists',
    description: 'HTML lists allow web developers to group a set of related items in lists.',
    content: [
      'An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag. Items are marked with bullets by default.',
      'An ordered list starts with the `<ol>` tag. Items are marked with numbers by default.',
      'HTML description lists `<dl>` contain terms `<dt>` and descriptions `<dd>`.'
    ],
    code: {
      mode: 'web',
      html: `<h3>Core Languages</h3>
<ul>
  <li>HTML5 Structure</li>
  <li>CSS3 Styling & Layouts</li>
  <li>JavaScript Interactivity</li>
</ul>

<h3>3-Step Project Workflow</h3>
<ol>
  <li>Write and test code in Tryit Editor</li>
  <li>Verify live preview and console diagnostics</li>
  <li>Download clean project files</li>
</ol>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; color: #1e293b; }
h3 { color: #9333ea; margin-bottom: 6px; }
ul, ol { padding-left: 20px; line-height: 1.6; }`
    },
    keyPoints: [
      'Unordered lists (ul) for items with no numerical sequence',
      'Ordered lists (ol) for sequential instructions',
      'Navigation bars in websites are traditionally coded as unordered lists'
    ]
  },
  {
    id: 'html-forms',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-forms',
    title: 'HTML Forms',
    description: 'An HTML form is used to collect user input. The user input is most often sent to a server for processing.',
    content: [
      'The HTML `<form>` element defines a form that is used to collect user input.',
      'The `<input>` element is the most important form element and can be displayed in several ways, depending on the `type` attribute.',
      'Always associate `<label>` with `<input>` using the `for` attribute matching the input `id` for accessibility.'
    ],
    code: {
      mode: 'web',
      html: `<form class="studio-form" onsubmit="event.preventDefault(); alert('Form submitted!');">
  <h3>Register for DesignArtPro</h3>
  <div class="form-group">
    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" placeholder="e.g. Alex Smith" required>
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" placeholder="alex@example.com" required>
  </div>
  <button type="submit" class="submit-btn">Create Free Account</button>
</form>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; background: #fafafa; }
.studio-form { max-width: 320px; background: white; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; }
h3 { margin: 0 0 16px 0; color: #0f172a; font-size: 18px; }
.form-group { margin-bottom: 12px; }
label { display: block; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 4px; }
input { width: 100%; box-sizing: border-box; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; }
.submit-btn { width: 100%; background: #04AA6D; color: white; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; }
.submit-btn:hover { background: #059862; }`
    },
    keyPoints: [
      'The action attribute defines the action to be performed when the form is submitted',
      'The method attribute specifies HTTP method (GET or POST)',
      'The required attribute provides native browser validation'
    ]
  },
  {
    id: 'html-input-types',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-input-types',
    title: 'HTML Input Types',
    description: 'HTML offers a rich variety of input types for text, passwords, numbers, dates, checkboxes, and radio buttons.',
    content: [
      'Common input types: `text`, `password`, `email`, `number`, `checkbox`, `radio`, `date`, `color`, `range`, `file`, `submit`.',
      'Password inputs mask characters for security.',
      'Radio buttons allow users to select only one option from a limited number of choices.',
      'Checkboxes let users select ZERO or MORE options.'
    ],
    code: {
      mode: 'web',
      html: `<div class="inputs-grid">
  <div>
    <label>Color Picker:</label>
    <input type="color" value="#9333ea">
  </div>
  <div>
    <label>Project Budget Slider:</label>
    <input type="range" min="100" max="2000" value="500">
  </div>
  <div>
    <label><input type="checkbox" checked> Subscribe to newsletter</label>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; }
.inputs-grid { display: flex; flex-direction: column; gap: 14px; max-width: 300px; }
label { font-size: 13px; font-weight: 600; color: #334155; }`
    },
    keyPoints: [
      'name attribute groups radio buttons together',
      'type="date" provides native date picker popup',
      'type="file" enables document and image uploads'
    ]
  },
  {
    id: 'html-media',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-media',
    title: 'HTML Media',
    description: 'Multimedia comes in many formats: audio, music, videos, movies, and animations.',
    content: [
      'The HTML `<video>` element is used to show video on a web page.',
      'The HTML `<audio>` element is used to play audio files on a web page.',
      'Use the `controls` attribute to add play, pause, and volume controls.'
    ],
    code: {
      mode: 'web',
      html: `<h3>HTML5 Audio & Video Players</h3>
<p>Modern HTML includes native media controls without requiring third-party plugins.</p>
<audio controls style="width: 100%; max-width: 320px;">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
      css: `body { font-family: system-ui, sans-serif; padding: 16px; color: #1e293b; }`
    },
    keyPoints: [
      'Always provide fallback text inside <video> and <audio>',
      'The autoplay attribute starts media automatically (often muted by browsers)',
      'The loop attribute replays media continuously'
    ]
  },
  {
    id: 'html-semantic',
    language: 'html',
    section: 'HTML Tutorial',
    slug: 'html-semantic',
    title: 'HTML Semantic Elements',
    description: 'Semantic elements clearly describe their meaning to both the browser and the developer.',
    content: [
      'A semantic element clearly describes its meaning to both the browser and the developer.',
      'Non-semantic elements tell nothing about their content: `<div>` and `<span>`.',
      'Semantic elements clearly define their content: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.'
    ],
    code: {
      mode: 'web',
      html: `<header class="layout-box">Header (Brand Logo & Global Search)</header>
<nav class="layout-box">Navigation (<nav>)</nav>
<div style="display: flex; gap: 8px; margin: 8px 0;">
  <main class="layout-box" style="flex: 2;">Main (<main> Articles & Lessons)</main>
  <aside class="layout-box" style="flex: 1;">Aside (<aside> Sidebar & Ads)</aside>
</div>
<footer class="layout-box">Footer (© DesignArtPro Studio)</footer>`,
      css: `.layout-box { background: #f8fafc; border: 1px dashed #cbd5e1; padding: 12px; text-align: center; font-family: monospace; font-size: 12px; font-weight: bold; color: #475569; border-radius: 8px; }`
    },
    keyPoints: [
      'Semantic tags dramatically improve SEO indexing',
      'Screen readers use landmarks to navigate pages quickly',
      '<article> should be independently distributable content'
    ]
  },

  // ==========================================
  // CSS TUTORIAL (15 TOPICS)
  // ==========================================
  {
    id: 'css-intro',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-intro',
    title: 'CSS Introduction',
    description: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
    content: [
      'CSS stands for Cascading Style Sheets.',
      'CSS saves a huge amount of work by allowing you to control the layout of multiple web pages all at once.',
      'CSS handles colors, fonts, margins, animations, responsive layouts, and screen sizes.'
    ],
    code: {
      mode: 'web',
      html: `<h1>Welcome to CSS Mastery</h1>
<p>CSS transforms raw HTML structure into stunning, modern designs.</p>`,
      css: `body {
  background: linear-gradient(135deg, #faf5ff, #f0fdf4);
  font-family: system-ui, sans-serif;
  padding: 30px;
  text-align: center;
}
h1 { color: #9333ea; font-size: 28px; }
p { color: #04AA6D; font-size: 16px; font-weight: 600; }`
    },
    keyPoints: [
      'CSS describes how HTML elements are to be displayed on screen, paper, or in other media',
      'External stylesheets are stored in CSS files',
      'Cascading means styles cascade from general to specific rules'
    ]
  },
  {
    id: 'css-syntax',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-syntax',
    title: 'CSS Syntax',
    description: 'A CSS rule consists of a selector and a declaration block.',
    content: [
      'The selector points to the HTML element you want to style.',
      'The declaration block contains one or more declarations separated by semicolons.',
      'Each declaration includes a CSS property name and a value, separated by a colon: `p { color: red; font-size: 14px; }`.'
    ],
    code: {
      mode: 'web',
      html: `<h2>CSS Rule Example</h2>
<p class="intro">This paragraph is targeted by the .intro class selector.</p>`,
      css: `h2 {
  color: #04AA6D;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.intro {
  font-family: monospace;
  background: #f1f5f9;
  padding: 12px;
  border-left: 4px solid #04AA6D;
}`
    },
    keyPoints: [
      'Selector identifies the target elements',
      'Declaration block is surrounded by curly braces {}',
      'Always end declarations with semicolons'
    ]
  },
  {
    id: 'css-selectors',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-selectors',
    title: 'CSS Selectors',
    description: 'CSS selectors are used to "find" (or select) the HTML elements you want to style.',
    content: [
      'Element selector: selects elements based on the element name (e.g. `p`, `h1`).',
      'Id selector: uses the id attribute of an HTML element to select a specific element: `#myHeader`.',
      'Class selector: selects HTML elements with a specific class attribute: `.highlight`.',
      'Universal selector `*` selects all HTML elements on the page.'
    ],
    code: {
      mode: 'web',
      html: `<h3 id="uniqueTitle">Unique ID Title</h3>
<p class="highlight">Class highlight paragraph 1.</p>
<p class="highlight">Class highlight paragraph 2.</p>`,
      css: `#uniqueTitle { color: #ec4899; }
.highlight { background: #fef08a; padding: 6px 10px; border-radius: 6px; font-weight: bold; }`
    },
    keyPoints: [
      'An ID name cannot start with a number',
      'Classes can be reused across multiple elements on the same page',
      'IDs must be unique within an HTML document'
    ]
  },
  {
    id: 'css-colors',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-colors',
    title: 'CSS Colors',
    description: 'Colors in CSS can be specified using color names, HEX codes, RGB, RGBA, and HSL.',
    content: [
      'Colors bring emotion and visual hierarchy to web design.',
      'HEX values `#RRGGBB` are standard in professional web styling.',
      'Linear gradients create smooth transitions between two or more colors: `linear-gradient(direction, color1, color2)`.'
    ],
    code: {
      mode: 'web',
      html: `<div class="gradient-banner">
  <h3>DesignArtPro Vibrant Gradients</h3>
  <p>Blends purple, pink, and light-blue accents seamlessly.</p>
</div>`,
      css: `.gradient-banner {
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  font-family: system-ui, sans-serif;
  box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
}`
    },
    keyPoints: [
      'Maintain strong contrast ratios for readability',
      'Use gradients to create depth without extra image bandwidth',
      'Tailwind CSS color codes correlate to hexadecimal shades'
    ]
  },
  {
    id: 'css-backgrounds',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-backgrounds',
    title: 'CSS Backgrounds',
    description: 'The CSS background properties are used to add background effects for elements.',
    content: [
      'Properties: `background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position`, `background-size`.',
      'Use `background-size: cover;` to ensure images fill their containers completely.',
      'Background shorthand combines all properties into one concise line.'
    ],
    code: {
      mode: 'web',
      html: `<div class="bg-card">
  <h2>Cover Background Pattern</h2>
  <p>Clean white container layered over animated visuals.</p>
</div>`,
      css: `.bg-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  font-family: system-ui, sans-serif;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
}
.bg-card h2 { color: #04AA6D; margin: 0 0 8px 0; }`
    },
    keyPoints: [
      'background-repeat: no-repeat prevents unwanted tiling',
      'background-position: center centers hero imagery',
      'background-attachment: fixed creates parallax effects'
    ]
  },
  {
    id: 'css-borders',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-borders',
    title: 'CSS Borders',
    description: 'The CSS border properties allow you to specify the style, width, and color of an element border.',
    content: [
      'Border styles: `solid`, `dashed`, `dotted`, `double`, `none`.',
      'Use `border-radius` to round the corners of buttons and cards.',
      'Shorthand: `border: 2px solid #9333ea;`.'
    ],
    code: {
      mode: 'web',
      html: `<div class="pill-box">Border Radius & Accents</div>`,
      css: `.pill-box {
  border: 2px solid #9333ea;
  border-radius: 999px;
  padding: 12px 24px;
  text-align: center;
  font-weight: bold;
  color: #9333ea;
  background: #faf5ff;
  font-family: system-ui, sans-serif;
  display: inline-block;
}`
    },
    keyPoints: [
      'border-radius: 50% turns squares into perfect circles',
      'Individual borders can be set via border-top, border-bottom, etc.',
      'outline draws an outer line outside the border without shifting layout'
    ]
  },
  {
    id: 'css-margins',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-margins',
    title: 'CSS Margins',
    description: 'Margins are used to create space around elements, outside of any defined borders.',
    content: [
      'CSS has properties for specifying the margin for each side: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.',
      'Shorthand: `margin: 20px;` (all sides) or `margin: 10px auto;` (centers block elements horizontally).',
      'Margin collapse: top and bottom margins of adjacent elements sometimes collapse into a single margin.'
    ],
    code: {
      mode: 'web',
      html: `<div class="centered-box">Centered with margin: 0 auto</div>`,
      css: `.centered-box {
  width: 260px;
  margin: 20px auto;
  padding: 16px;
  background: #04AA6D;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  font-family: system-ui, sans-serif;
}`
    },
    keyPoints: [
      'margin: auto centers elements with a defined width',
      'Negative margins pull elements closer',
      'Margins never have a background color — they are transparent'
    ]
  },
  {
    id: 'css-padding',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-padding',
    title: 'CSS Padding',
    description: 'Padding is used to create space around an element content, inside of any defined borders.',
    content: [
      'Padding breathes life into content, preventing text from pressing against borders.',
      'Shorthand: `padding: top right bottom left;` (clockwise order).',
      'Use `box-sizing: border-box;` so padding does not increase the element total declared width.'
    ],
    code: {
      mode: 'web',
      html: `<button class="padded-btn">Comfortable Padding Button</button>`,
      css: `.padded-btn {
  padding: 14px 28px;
  background: #9333ea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}`
    },
    keyPoints: [
      'Padding is inside the border; margin is outside',
      'Padding adopts the element background color',
      'box-sizing: border-box is essential for responsive design'
    ]
  },
  {
    id: 'css-fonts',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-fonts',
    title: 'CSS Fonts',
    description: 'Choosing the right font has a huge impact on how the readers experience a website.',
    content: [
      'Font families: Serif (Times), Sans-serif (Arial, system-ui), Monospace (Courier, Consolas).',
      'Google Fonts can be imported easily via `<link>` or `@import`.',
      'Use font fallbacks: `font-family: "Plus Jakarta Sans", system-ui, sans-serif;`.'
    ],
    code: {
      mode: 'web',
      html: `<p class="modern-font">Clean modern sans-serif typography</p>
<p class="code-font">Code snippet with monospace font</p>`,
      css: `.modern-font { font-family: system-ui, sans-serif; font-size: 18px; font-weight: 700; color: #0f172a; }
.code-font { font-family: monospace; font-size: 14px; color: #04AA6D; }`
    },
    keyPoints: [
      'Always list fallback font families',
      'font-weight: 400 (normal), 700 (bold), 800 (extrabold)',
      'font-style: italic creates slanted text'
    ]
  },
  {
    id: 'css-text',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-text',
    title: 'CSS Text',
    description: 'CSS has a lot of properties for formatting text: text-align, text-decoration, text-transform, line-height.',
    content: [
      '`text-align`: `left`, `right`, `center`, `justify`.',
      '`text-transform`: `uppercase`, `lowercase`, `capitalize`.',
      '`line-height`: defines the vertical space between lines of text (ideal is 1.5 to 1.6).'
    ],
    code: {
      mode: 'web',
      html: `<h3 class="styled-text">Uppercase & Centered Title</h3>
<p class="spaced-text">Good line-height and letter-spacing makes long articles pleasurable to read on screens.</p>`,
      css: `.styled-text { text-align: center; text-transform: uppercase; letter-spacing: 2px; color: #9333ea; }
.spaced-text { line-height: 1.7; color: #475569; font-family: sans-serif; }`
    },
    keyPoints: [
      'text-decoration: none removes link underlines',
      'letter-spacing adjusts space between characters',
      'text-shadow creates glowing or 3D text effects'
    ]
  },
  {
    id: 'css-box-model',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-box-model',
    title: 'CSS Box Model',
    description: 'All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.',
    content: [
      'The CSS box model consists of: Margins, Borders, Padding, and the actual Content.',
      'Content: The content of the box, where text and images appear.',
      'Padding: Clears an area around the content. The padding is transparent.',
      'Border: A border that goes around the padding and content.',
      'Margin: Clears an area outside the border. The margin is transparent.'
    ],
    code: {
      mode: 'web',
      html: `<div class="box-model-demo">
  <div class="box-margin">Margin
    <div class="box-border">Border
      <div class="box-padding">Padding
        <div class="box-content">Content</div>
      </div>
    </div>
  </div>
</div>`,
      css: `.box-model-demo { font-family: monospace; font-size: 12px; text-align: center; }
.box-margin { background: #fed7aa; padding: 16px; border: 2px dashed #f97316; border-radius: 12px; }
.box-border { background: #fef08a; padding: 14px; border: 3px solid #eab308; border-radius: 8px; }
.box-padding { background: #bbf7d0; padding: 14px; border: 2px dashed #22c55e; border-radius: 6px; }
.box-content { background: #93c5fd; padding: 16px; border-radius: 4px; font-weight: bold; color: #1e3a8a; }`
    },
    keyPoints: [
      'box-sizing: border-box ensures width includes padding and border',
      'Understanding the box model solves 90% of CSS layout bugs',
      'Use DevTools inspector to view element dimensions'
    ]
  },
  {
    id: 'css-flexbox',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-flexbox',
    title: 'CSS Flexbox',
    description: 'The Flexible Box Layout Module makes it easier to design flexible responsive layout structures without using float or positioning.',
    content: [
      'To use Flexbox, set `display: flex;` on the parent container.',
      '`justify-content` aligns items horizontally: `center`, `space-between`, `space-around`, `flex-start`.',
      '`align-items` aligns items vertically: `center`, `stretch`, `flex-start`.',
      '`flex-wrap: wrap;` allows items to wrap onto multiple lines when space runs out.'
    ],
    code: {
      mode: 'web',
      html: `<div class="flex-row">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
      css: `.flex-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: #f1f5f9;
  padding: 16px;
  border-radius: 12px;
}
.flex-item {
  background: #04AA6D;
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
  flex: 1;
  text-align: center;
  font-family: sans-serif;
}`
    },
    keyPoints: [
      'display: flex creates a flex container',
      'flex: 1 distributes remaining space equally',
      'gap property sets space between items cleanly'
    ]
  },
  {
    id: 'css-grid',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-grid',
    title: 'CSS Grid',
    description: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns.',
    content: [
      'Grid provides powerful 2-dimensional layouts (both rows and columns simultaneously).',
      'Set `display: grid;` and define columns with `grid-template-columns: repeat(3, 1fr);`.',
      'The `fr` fraction unit divides available space proportionally.'
    ],
    code: {
      mode: 'web',
      html: `<div class="grid-container">
  <div class="grid-card">Grid 1</div>
  <div class="grid-card">Grid 2</div>
  <div class="grid-card">Grid 3</div>
  <div class="grid-card">Grid 4</div>
</div>`,
      css: `.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  font-family: sans-serif;
}
.grid-card {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  color: #9333ea;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}`
    },
    keyPoints: [
      'repeat(auto-fit, minmax(200px, 1fr)) creates automatic responsive grids',
      'grid-column: span 2 allows elements to span across multiple columns',
      'Grid excels at macro-layouts; Flexbox excels at micro-components'
    ]
  },
  {
    id: 'css-animations',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-animations',
    title: 'CSS Animations',
    description: 'CSS allows animation of HTML elements without using JavaScript or Flash!',
    content: [
      'An animation lets an element gradually change from one style to another.',
      'Define animation rules using `@keyframes` with `from` / `to` or percentage steps (`0%`, `50%`, `100%`).',
      'Apply to elements using: `animation: pulse 2s infinite ease-in-out;`.'
    ],
    code: {
      mode: 'web',
      html: `<div class="animated-circle"></div>`,
      css: `.animated-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #9333ea, #ec4899);
  border-radius: 50%;
  margin: 30px auto;
  animation: pulseGlow 1.5s infinite alternate ease-in-out;
}

@keyframes pulseGlow {
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(147, 51, 234, 0.4); }
  100% { transform: scale(1.25); box-shadow: 0 0 25px rgba(236, 72, 153, 0.6); }
}`
    },
    keyPoints: [
      '@keyframes defines stages of the animation',
      'infinite loops the animation continuously',
      'transform: scale() and opacity are GPU-accelerated for smooth 60fps'
    ]
  },
  {
    id: 'css-responsive',
    language: 'css',
    section: 'CSS Tutorial',
    slug: 'css-responsive',
    title: 'CSS Responsive Design',
    description: 'Responsive web design makes your web page look good on all devices: desktops, tablets, and phones.',
    content: [
      'Responsive web design uses HTML and CSS to automatically resize, hide, shrink, or enlarge a website.',
      'Always include the viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.',
      'Use CSS media queries: `@media (max-width: 768px) { ... }`.'
    ],
    code: {
      mode: 'web',
      html: `<div class="responsive-box">
  Resize your screen or try it in Tryit Editor!
</div>`,
      css: `.responsive-box {
  background: #04AA6D;
  color: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  font-weight: bold;
  font-family: sans-serif;
}
@media (max-width: 600px) {
  .responsive-box {
    background: #9333ea;
  }
}`
    },
    keyPoints: [
      'Mobile-first design designs for small screens first, then scales up',
      'Use percentage or rem units rather than fixed pixels',
      'Flexbox and Grid adapt automatically with flex-wrap and auto-fit'
    ]
  },

  // ==========================================
  // JAVASCRIPT TUTORIAL (15 TOPICS)
  // ==========================================
  {
    id: 'js-intro',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-intro',
    title: 'JavaScript Introduction',
    description: 'JavaScript is the world most popular programming language. JavaScript is the programming language of the Web.',
    content: [
      'JavaScript can change HTML content with `document.getElementById()`.',
      'JavaScript can change HTML attribute values (such as changing an image source).',
      'JavaScript can change HTML styles (CSS) and hide or show elements.',
      'JavaScript accepts both single and double quotes.'
    ],
    code: {
      mode: 'web',
      html: `<h2 id="demoTitle">JavaScript Can Change Me!</h2>
<button onclick="document.getElementById('demoTitle').textContent = 'Hello DesignArtPro World!'">
  Click to Change Text
</button>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; }
button { background: #04AA6D; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; }`
    },
    keyPoints: [
      'JavaScript powers client-side interactivity on 99% of all websites',
      'document.getElementById() selects elements by unique id',
      'Scripts can be placed in <head> or at the bottom of <body>'
    ]
  },
  {
    id: 'js-variables',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-variables',
    title: 'Variables (let, const, var)',
    description: 'Variables are containers for storing data values. In modern JavaScript, we use let and const.',
    content: [
      'Always declare variables with `const` if the value should not be changed.',
      'Use `let` if the value can change.',
      'Only use `var` if you MUST support old browsers (pre-ES6).',
      'Variable names are case-sensitive: `myVariable` and `myvariable` are two different variables.'
    ],
    code: {
      mode: 'web',
      html: `<div id="outputBox"></div>`,
      css: `#outputBox { font-family: monospace; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }`,
      js: `const studioName = "DesignArtPro";
let activeProjects = 12;
activeProjects = activeProjects + 1;

document.getElementById('outputBox').innerHTML = 
  "<strong>Studio:</strong> " + studioName + "<br>" +
  "<strong>Active Projects:</strong> " + activeProjects;
console.log("Studio State:", { studioName, activeProjects });`
    },
    keyPoints: [
      'const cannot be reassigned',
      'let has block scope (enclosed by {})',
      'Use descriptive camelCase names for variables'
    ]
  },
  {
    id: 'js-datatypes',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-datatypes',
    title: 'Data Types',
    description: 'JavaScript variables can hold different data types: numbers, strings, objects, booleans, and more.',
    content: [
      'JavaScript has 8 Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.',
      'Strings are written with quotes: `"DesignArtPro"`.',
      'Numbers are written with or without decimals: `149.99`.',
      'Booleans can only have two values: `true` or `false`.'
    ],
    code: {
      mode: 'web',
      html: `<pre id="typesOut"></pre>`,
      css: `pre { font-family: monospace; background: #1e1b4b; color: #4ade80; padding: 16px; border-radius: 12px; }`,
      js: `const title = "Logo Design";
const price = 149;
const isAvailable = true;
const tools = ["Figma", "Illustrator", "Photoshop"];

document.getElementById('typesOut').textContent = 
  "typeof title: " + typeof title + "\\n" +
  "typeof price: " + typeof price + "\\n" +
  "typeof isAvailable: " + typeof isAvailable + "\\n" +
  "typeof tools: " + typeof tools;`
    },
    keyPoints: [
      'typeof operator returns the type of a variable',
      'Arrays are a special type of Object in JavaScript',
      'JavaScript variables are dynamically typed'
    ]
  },
  {
    id: 'js-operators',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-operators',
    title: 'Operators',
    description: 'JavaScript operators are used to perform arithmetic, assignment, comparison, and logical operations.',
    content: [
      'Arithmetic operators: `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponentiation).',
      'Comparison operators: `===` (strict equal, checks both value and type), `!==` (strict not equal), `>`, `<`, `>=`, `<=`.',
      'Logical operators: `&&` (AND), `||` (OR), `!` (NOT).'
    ],
    code: {
      mode: 'web',
      html: `<div id="calc"></div>`,
      css: `#calc { font-family: sans-serif; padding: 16px; font-weight: bold; }`,
      js: `const base = 200;
const tax = base * 0.05;
const total = base + tax;
const isAffordable = total <= 250;

document.getElementById('calc').innerHTML = 
  "Subtotal: $" + base + "<br>Tax (5%): $" + tax + "<br>Total: $" + total + 
  "<br>Under Budget: " + (isAffordable ? "Yes ✅" : "No ❌");`
    },
    keyPoints: [
      'Always prefer === over == to avoid implicit type coercion bugs',
      'Modulus (%) returns the remainder of division',
      'Template literals \`\${expr}\` allow easy string interpolation'
    ]
  },
  {
    id: 'js-conditions',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-conditions',
    title: 'Conditions (if, else, switch)',
    description: 'Conditional statements are used to perform different actions based on different conditions.',
    content: [
      'Use `if` to specify a block of code to be executed, if a specified condition is true.',
      'Use `else` to specify a block of code to be executed, if the same condition is false.',
      'Use `else if` to specify a new condition to test, if the first condition is false.',
      'Use `switch` to specify many alternative blocks of code to be executed.'
    ],
    code: {
      mode: 'web',
      html: `<div id="greeting"></div>`,
      css: `#greeting { font-family: sans-serif; font-size: 20px; font-weight: bold; color: #9333ea; padding: 16px; }`,
      js: `const hour = new Date().getHours();
let msg = "";

if (hour < 12) {
  msg = "Good Morning! Ready to code?";
} else if (hour < 18) {
  msg = "Good Afternoon! Keep building!";
} else {
  msg = "Good Evening! Enjoy creative coding!";
}

document.getElementById('greeting').textContent = msg;`
    },
    keyPoints: [
      'Ternary operator: condition ? exprIfTrue : exprIfFalse',
      'switch statements require break to avoid fall-through',
      'Default clause catches unhandled conditions in switch'
    ]
  },
  {
    id: 'js-loops',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-loops',
    title: 'Loops (for, while, forEach)',
    description: 'Loops can execute a block of code a number of times, handy for iterating over arrays or collections.',
    content: [
      '`for` - loops through a block of code a number of times.',
      '`for/in` - loops through the properties of an Object.',
      '`for/of` - loops through the values of an iterable object (Arrays, Strings).',
      '`while` - loops through a block of code while a specified condition is true.'
    ],
    code: {
      mode: 'web',
      html: `<ul id="serviceList"></ul>`,
      css: `ul { font-family: sans-serif; padding-left: 20px; }
li { padding: 4px 0; color: #0f172a; }`,
      js: `const services = ["Logo Design", "UI/UX Architecture", "React Development", "SQL Database"];
const list = document.getElementById('serviceList');

services.forEach((item, index) => {
  const li = document.createElement('li');
  li.textContent = (index + 1) + ". " + item;
  list.appendChild(li);
});`
    },
    keyPoints: [
      'Array.forEach() is modern and clean for iterating lists',
      'break exits the loop immediately; continue skips to next iteration',
      'Avoid infinite loops by ensuring loop conditions terminate'
    ]
  },
  {
    id: 'js-functions',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-functions',
    title: 'Functions & Arrow Syntax',
    description: 'A JavaScript function is a block of code designed to perform a particular task, executed when invoked.',
    content: [
      'Functions are declared with the `function` keyword or modern ES6 arrow syntax `() => {}`.',
      'Functions take parameters and return values using the `return` statement.',
      'Arrow functions provide a more concise syntax for writing function expressions.'
    ],
    code: {
      mode: 'web',
      html: `<div id="res"></div>`,
      css: `#res { font-family: monospace; font-size: 14px; padding: 16px; background: #faf5ff; border-radius: 8px; color: #581c87; }`,
      js: `// Arrow function with default parameter
const calculateQuote = (hours, rate = 85) => {
  return hours * rate;
};

const quote = calculateQuote(10);
document.getElementById('res').textContent = "Calculated Quote: $" + quote + " USD";`
    },
    keyPoints: [
      'Arrow functions do not bind their own this',
      'Functions promote DRY (Do Not Repeat Yourself) principles',
      'Default parameter values handle missing arguments gracefully'
    ]
  },
  {
    id: 'js-arrays',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-arrays',
    title: 'Arrays & Array Methods',
    description: 'An array is a special variable, which can hold more than one value at a time.',
    content: [
      'Arrays are zero-indexed: first element is `[0]`.',
      'Useful methods: `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`.',
      'Higher-order methods: `map()` transforms items, `filter()` filters matches, `reduce()` accumulates values.'
    ],
    code: {
      mode: 'web',
      html: `<div id="arrayOut"></div>`,
      css: `#arrayOut { font-family: sans-serif; padding: 16px; font-weight: bold; color: #04AA6D; }`,
      js: `const prices = [149, 399, 349, 79];
const discounted = prices.map(p => p * 0.9); // 10% off

document.getElementById('arrayOut').innerHTML = 
  "Original: " + prices.join(", ") + "<br>" +
  "10% Off: " + discounted.map(d => "$" + d.toFixed(0)).join(", ");`
    },
    keyPoints: [
      'Array.length returns the number of items in the array',
      'map() returns a brand new array without mutating the original',
      'filter() returns only elements that pass the predicate test'
    ]
  },
  {
    id: 'js-objects',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-objects',
    title: 'Objects',
    description: 'JavaScript objects are containers for named values called properties and methods.',
    content: [
      'Objects are declared with curly braces `{}` containing key/value pairs.',
      'Access properties with dot notation (`user.name`) or bracket notation (`user["name"]`).',
      'Objects can contain nested objects, arrays, and functions.'
    ],
    code: {
      mode: 'web',
      html: `<div id="profile"></div>`,
      css: `#profile { font-family: sans-serif; padding: 16px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }`,
      js: `const user = {
  name: "Alex Smith",
  role: "Lead Creative Technologist",
  studio: "DesignArtPro",
  skills: ["HTML", "CSS", "JS", "UI/UX"],
  getGreeting: function() {
    return "Hi, I am " + this.name + " from " + this.studio;
  }
};

document.getElementById('profile').innerHTML = 
  "<strong>" + user.getGreeting() + "</strong><br>" +
  "Role: " + user.role + "<br>" +
  "Skills: " + user.skills.join(", ");`
    },
    keyPoints: [
      'Object.keys(obj) returns an array of keys',
      'Destructuring { name, role } = user extracts variables cleanly',
      'Objects are passed by reference, not by value'
    ]
  },
  {
    id: 'js-events',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-events',
    title: 'Events & Listeners',
    description: 'HTML events are "things" that happen to HTML elements, such as button clicks, mouse moves, and keystrokes.',
    content: [
      'JavaScript lets you execute code when events are detected.',
      'Common events: `click`, `change`, `mouseover`, `keydown`, `submit`, `load`.',
      'Best practice: use `addEventListener()` to bind events cleanly without inline HTML event attributes.'
    ],
    code: {
      mode: 'web',
      html: `<button id="interactiveBtn" class="cool-btn">Hover or Click Me</button>
<p id="eventStatus">Awaiting user interaction...</p>`,
      css: `body { font-family: sans-serif; padding: 16px; }
.cool-btn { background: #9333ea; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; cursor: pointer; }
#eventStatus { margin-top: 12px; font-size: 13px; color: #64748b; }`,
      js: `const btn = document.getElementById('interactiveBtn');
const status = document.getElementById('eventStatus');

btn.addEventListener('click', () => {
  status.textContent = 'Button clicked at ' + new Date().toLocaleTimeString() + '! 🎉';
  btn.style.background = '#04AA6D';
});

btn.addEventListener('mouseover', () => {
  status.textContent = 'Pointer is hovering over the button.';
});`
    },
    keyPoints: [
      'addEventListener() allows attaching multiple handlers to one element',
      'event.preventDefault() stops default browser behaviors like form submits',
      'event.stopPropagation() stops event bubbling'
    ]
  },
  {
    id: 'js-dom',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-dom',
    title: 'DOM Manipulation',
    description: 'The Document Object Model (DOM) is an API for HTML and XML documents. It defines the logical structure of documents.',
    content: [
      'When a web page is loaded, the browser creates a Document Object Model of the page.',
      'Methods: `querySelector()`, `querySelectorAll()`, `createElement()`, `appendChild()`, `classList.add()`, `classList.remove()`.',
      'With DOM manipulation, you can dynamically create cards, modify classes, and reorder content in real time.'
    ],
    code: {
      mode: 'web',
      html: `<button id="addCardBtn">Add Project Card</button>
<div id="cardsContainer" style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;"></div>`,
      css: `body { font-family: sans-serif; padding: 16px; }
#addCardBtn { background: #04AA6D; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; }
.card { background: white; border: 1px solid #e2e8f0; padding: 14px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }`,
      js: `let count = 0;
document.getElementById('addCardBtn').addEventListener('click', () => {
  count++;
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = 'Card #' + count + ' created via DOM';
  document.getElementById('cardsContainer').appendChild(card);
});`
    },
    keyPoints: [
      'querySelector() uses CSS selectors to find elements',
      'classList.toggle() makes accordion and modal building effortless',
      'Avoid layout thrashing by grouping DOM modifications'
    ]
  },
  {
    id: 'js-form-validation',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-form-validation',
    title: 'Form Validation',
    description: 'HTML form validation can be done by JavaScript to verify passwords, emails, and required inputs before dispatch.',
    content: [
      'Client-side form validation prevents incorrect data from being dispatched to the server.',
      'Check input lengths, regular expressions for email formats, and matching passwords.',
      'Provide instant, friendly error messages next to fields.'
    ],
    code: {
      mode: 'web',
      html: `<form id="valForm">
  <input type="text" id="usernameInput" placeholder="Username (min 4 chars)">
  <div id="errorMsg" style="color: #e11d48; font-size: 12px; margin: 4px 0;"></div>
  <button type="submit" style="background: #9333ea; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Validate</button>
</form>`,
      css: `body { font-family: sans-serif; padding: 16px; }
input { padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; }`,
      js: `document.getElementById('valForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('usernameInput').value.trim();
  const err = document.getElementById('errorMsg');
  if (val.length < 4) {
    err.textContent = 'Username must be at least 4 characters long!';
  } else {
    err.style.color = '#04AA6D';
    err.textContent = 'Valid username: ' + val + ' ✅';
  }
});`
    },
    keyPoints: [
      'Always validate on the server as well (client validation is for UX, server is for security)',
      'Regular expressions (Regex) test complex patterns like email and phone numbers',
      'Provide clear, non-punitive error messaging'
    ]
  },
  {
    id: 'js-localstorage',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-localstorage',
    title: 'Local Storage API',
    description: 'The localStorage object stores data with no expiration date. The data is not deleted when the browser is closed.',
    content: [
      '`localStorage.setItem("key", "value")` saves data.',
      '`localStorage.getItem("key")` retrieves data.',
      '`localStorage.removeItem("key")` deletes an item.',
      'To store objects or arrays, convert them to strings using `JSON.stringify()`, and read them back with `JSON.parse()`.'
    ],
    code: {
      mode: 'web',
      html: `<div>
  <input type="text" id="taskInput" placeholder="Add quick note...">
  <button id="saveBtn" style="background: #04AA6D; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">Save</button>
  <div id="savedDisplay" style="margin-top: 10px; font-weight: bold; color: #581c87;"></div>
</div>`,
      css: `body { font-family: sans-serif; padding: 16px; }
input { padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; }`,
      js: `const display = document.getElementById('savedDisplay');
const stored = localStorage.getItem('demo_note') || 'No note saved yet.';
display.textContent = 'Saved Note: ' + stored;

document.getElementById('saveBtn').addEventListener('click', () => {
  const val = document.getElementById('taskInput').value;
  if (val) {
    localStorage.setItem('demo_note', val);
    display.textContent = 'Saved Note: ' + val;
  }
});`
    },
    keyPoints: [
      'localStorage has a typical quota of 5MB per origin',
      'sessionStorage clears automatically when the tab is closed',
      'Never store sensitive auth tokens or passwords in localStorage'
    ]
  },
  {
    id: 'js-error-handling',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-error-handling',
    title: 'Error Handling (try...catch)',
    description: 'The try statement allows you to define a block of code to be tested for errors while it is being executed.',
    content: [
      'The `try` block contains the code that may throw an exception.',
      'The `catch` block catches the error and executes code to handle it gracefully without crashing your entire web page.',
      'The `finally` block executes regardless of the try / catch result.',
      '`throw` lets you create custom error messages.'
    ],
    code: {
      mode: 'web',
      html: `<div id="errOutput"></div>`,
      css: `#errOutput { font-family: monospace; padding: 16px; background: #fff1f2; color: #be123c; border-radius: 8px; border: 1px solid #fecdd3; }`,
      js: `try {
  // Deliberate reference error
  nonExistentFunction();
} catch (error) {
  document.getElementById('errOutput').innerHTML = 
    "<strong>Caught Error Gracefully:</strong> " + error.message;
  console.error("Diagnostic error caught:", error);
} finally {
  console.log("Cleanup in finally block complete.");
}`
    },
    keyPoints: [
      'try...catch prevents fatal script termination',
      'error.name provides the error type (TypeError, ReferenceError)',
      'Custom errors can be thrown with throw new Error("message")'
    ]
  },
  {
    id: 'js-advanced',
    language: 'javascript',
    section: 'JavaScript Tutorial',
    slug: 'js-advanced',
    title: 'Advanced JavaScript (Async/Await & Promises)',
    description: 'Asynchronous JavaScript allows you to fetch data from APIs and run background tasks without freezing the user interface.',
    content: [
      'Promises represent the eventual completion or failure of an asynchronous operation.',
      '`async` and `await` make asynchronous code look and behave like synchronous code.',
      '`fetch()` provides a modern interface for making HTTP network requests.'
    ],
    code: {
      mode: 'web',
      html: `<button id="loadBtn" style="background: #9333ea; color: white; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-weight: bold;">
  Simulate Async API Call
</button>
<pre id="apiOut" style="margin-top: 12px; background: #f8fafc; padding: 14px; border-radius: 8px;"></pre>`,
      css: `body { font-family: sans-serif; padding: 16px; }`,
      js: `const fakeFetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Alex Smith", balance: 1450.00, status: "Active" });
    }, 400);
  });
};

document.getElementById('loadBtn').addEventListener('click', async () => {
  const out = document.getElementById('apiOut');
  out.textContent = "Fetching from DesignArtPro API...";
  const data = await fakeFetchUser();
  out.textContent = JSON.stringify(data, null, 2);
  console.log("Async API response:", data);
});`
    },
    keyPoints: [
      'async functions always return a Promise',
      'await pauses execution within the async function until the Promise resolves',
      'Always wrap await calls in try...catch blocks'
    ]
  },

  // ==========================================
  // SQL TUTORIAL
  // ==========================================
  {
    id: 'sql-intro',
    language: 'sql',
    section: 'SQL Tutorial',
    slug: 'sql-intro',
    title: 'SQL Introduction & SELECT',
    description: 'SQL is a standard language for storing, manipulating and retrieving data in relational databases.',
    content: [
      'SQL stands for Structured Query Language.',
      'SQL allows you to access and manipulate databases: execute queries, retrieve data, insert records, update records, and delete records.',
      'The `SELECT` statement is used to select data from a database: `SELECT column1, column2 FROM table_name;`.'
    ],
    code: {
      mode: 'single',
      language: 'sql',
      single: `-- DesignArtPro Relational SQL
-- Query all client accounts with balance >= 1000
SELECT id, name, email, role, balance 
FROM users 
WHERE balance >= 1000 
ORDER BY balance DESC;`
    },
    keyPoints: [
      'SQL keywords are NOT case-sensitive: select is the same as SELECT',
      'Semicolon is standard to separate multiple SQL statements',
      'SELECT * selects all columns in the table'
    ]
  },
  {
    id: 'sql-where',
    language: 'sql',
    section: 'SQL Tutorial',
    slug: 'sql-where',
    title: 'SQL WHERE Clause',
    description: 'The WHERE clause is used to filter records that fulfill a specified condition.',
    content: [
      'The `WHERE` clause can be combined with `AND`, `OR`, and `NOT` operators.',
      'Common operators: `=`, `<>`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `LIKE`, `IN`.',
      'Text values are enclosed in single quotes; numeric fields are not.'
    ],
    code: {
      mode: 'single',
      language: 'sql',
      single: `-- Query projects where status is Completed
SELECT id, title, category, budget, status 
FROM projects 
WHERE status = 'Completed' AND budget > 100;`
    },
    keyPoints: [
      'WHERE filters rows before any grouping occurs',
      'LIKE is used to search for a specified pattern in a column',
      'IN allows you to specify multiple values in a WHERE clause'
    ]
  },

  // ==========================================
  // PYTHON TUTORIAL
  // ==========================================
  {
    id: 'python-intro',
    language: 'python',
    section: 'Python Tutorial',
    slug: 'python-intro',
    title: 'Python Introduction & Syntax',
    description: 'Python is a popular programming language created by Guido van Rossum, known for clean readability.',
    content: [
      'Python is used for web development, software development, mathematics, and system scripting.',
      'Python was designed for readability, and has some similarities to the English language.',
      'Python uses indentation (whitespace) to define scope; unlike other programming languages that often use curly brackets.'
    ],
    code: {
      mode: 'single',
      language: 'python',
      single: `# DesignArtPro Python 3 Suite
print("Welcome to DesignArtPro Python Studio!")

def calculate_quote(service_name: str, base_hours: int, hourly_rate: int = 85) -> dict:
    subtotal = base_hours * hourly_rate
    print(f"Service: {service_name} | Subtotal: \${subtotal}")
    return {"service": service_name, "estimate": subtotal}

quote = calculate_quote("Logo Design", 12)
print("Returned Quote Object:", quote)`
    },
    keyPoints: [
      'Indentation is mandatory in Python (typically 4 spaces)',
      '# denotes single-line comments',
      'f-strings f"Value: {val}" allow clean string interpolation'
    ]
  },

  // ==========================================
  // REACT TUTORIAL
  // ==========================================
  {
    id: 'react-intro',
    language: 'react',
    section: 'React Tutorial',
    slug: 'react-intro',
    title: 'React Introduction & Components',
    description: 'React is a JavaScript library for building user interfaces, developed and maintained by Meta.',
    content: [
      'React is used to build single-page applications.',
      'React allows us to create reusable UI components.',
      'Components are like functions that return HTML elements via JSX.'
    ],
    code: {
      mode: 'web',
      html: `<div id="reactRoot">
  <div style="background: white; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center; font-family: system-ui, sans-serif;">
    <span style="background: #e0f2fe; color: #0284c7; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: bold;">React Component</span>
    <h3 style="color: #0f172a; margin: 12px 0 8px 0;">DesignArtPro UI</h3>
    <button id="likeBtn" style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer;">
      Likes: 0 👍
    </button>
  </div>
</div>`,
      css: `body { padding: 16px; font-family: system-ui, sans-serif; }`,
      js: `let likes = 0;
document.getElementById('likeBtn').addEventListener('click', (e) => {
  likes++;
  e.target.textContent = 'Likes: ' + likes + ' 👍';
});`
    },
    keyPoints: [
      'Components are independent and reusable bits of code',
      'JSX stands for JavaScript XML',
      'State allows React components to change their output over time'
    ]
  }
];

// Helper to filter lessons by language
export function getLessonsByLanguage(lang: string): TutorialLesson[] {
  return comprehensiveTutorials.filter((t) => t.language.toLowerCase() === lang.toLowerCase());
}

// Available languages in navigation
export const supportedLanguagesList = [
  { id: 'html', label: 'HTML', badge: '50+' },
  { id: 'css', label: 'CSS', badge: '35+' },
  { id: 'javascript', label: 'JAVASCRIPT', badge: 'ES6+' },
  { id: 'sql', label: 'SQL', badge: 'DB' },
  { id: 'python', label: 'PYTHON', badge: '3.12' },
  { id: 'java', label: 'JAVA', badge: 'OOP' },
  { id: 'php', label: 'PHP', badge: '8.3' },
  { id: 'c', label: 'C', badge: 'Sys' },
  { id: 'cpp', label: 'C++', badge: 'Fast' },
  { id: 'csharp', label: 'C#', badge: '.NET' },
  { id: 'bootstrap', label: 'BOOTSTRAP', badge: 'v5' },
  { id: 'react', label: 'REACT', badge: '19' },
  { id: 'mysql', label: 'MYSQL', badge: 'Relational' },
  { id: 'w3css', label: 'W3.CSS', badge: 'Lite' },
  { id: 'aws', label: 'AWS', badge: 'Cloud' }
];
