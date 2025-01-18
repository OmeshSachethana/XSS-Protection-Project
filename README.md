XSS Protection Example

This project demonstrates best practices for mitigating Cross-Site Scripting (XSS) vulnerabilities in web applications. It includes client-side sanitization with DOMPurify and server-side implementation of Content Security Policy (CSP) to enhance security.
Features

    Client-Side XSS Protection: Sanitizes user input using DOMPurify before rendering it in the DOM.
    Content Security Policy (CSP): Blocks inline scripts and ensures only trusted sources are allowed.
    Static File Serving: Serves static assets (e.g., HTML, JavaScript) securely.

How It Works

    Client-Side Sanitization:
        DOMPurify is used to clean user input and eliminate any malicious scripts or HTML before rendering.

    Server-Side Content Security Policy:
        A strict CSP is applied to prevent inline scripts or unauthorized external resources.
