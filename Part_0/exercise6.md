sequenceDiagram
    participant browser
    participant server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server --> server: Load HTML, CSS and JS
    server ->> browser: HTML document
    deactivate server

    browser ->> server: POST [{content:"Hello, just checking", date: "2026-06-23T23:48:21.711Z"}]
    activate server 
    server ->> server: save information
    server ->> browser: Code status 302 // load previous info with new note
    server ->> browser: data.json