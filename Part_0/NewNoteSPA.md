sequenceDiagram
    participant browser
    participant server

    browser ->>server : GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server 
    server ->>browser: HTML. CSS and JS

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server ->>browser: JSON DATA

    browser ->>browser: render info usin JS
    browser ->>browser: user creates a new note

    browser ->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_notes
    server activate
    server ->>browser: status201 (note created)
    browser ->> update notes list without rerendering the page
