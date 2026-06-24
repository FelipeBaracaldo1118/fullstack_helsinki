sequenceDiagram
    participant browser
    participant server

    browser ->>server : GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server 
    server ->>browser: HTML. CSS and JS

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server ->>brwoser: JSON DATA

    browser ->>browser: render info usin JS
    