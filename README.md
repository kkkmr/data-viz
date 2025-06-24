# Data Viz App

## Setup instructions

Install packages mentioned in package.json
- Node and react are must

## Features implemented

- Side navigation 
- Tabs with shows respective panels
- Accordion to expand and collapse with animation
- Chart to display line chart depending upon the data provided
- Card section to show key performers
- Dialog opens at left, with animation, when clicked on 'Edit variables' button
  - Tags to show variables with selected/deselected state
  - Context window opens when tags are hovered for more than 1.5s
  - Accordions at bottom of dialog to display primary and secondary variables

## Technical decisions and tradeoffs

### Flow of the App

- Login page
  - If not a member, create account
- Once Logged in, page redirects to Home page
- Structure of the App
  - Side Nav to the left
  - Tabs at the top
    - By default, charging stations is selected and its corresponding panel is shown
    - Header for panel
      - Click on Edit Variables button to show dialog
        - Search input and other buttons
        - Hover on tags to show context panel
        - Click on accordion titles to see variables
    - Accordion to show results
    - Charts and Cards section
    
## Structure of the App

Source folder is divided into different sub folder based on the purpose of the files

- app (To store the state of the user)
- components (Reusable elements - to be used in features and layouts)
  - Accordion
  - Card
  - Line Chart
  - RequireAuth
  - Tabs
  - Tag
- features (Built section/features using components)
  - AccordionSection - Best Scenario Results
  - authSlice - Authorization of user
  - cardSection - Key performance indicators
  - Dialog - Slide overlay to edit variables
  - DialogContent - Content to dialog to house tags and accordions
  - SideNav - Side navigation
  - TagSection - Tags to select/deselect varibles in Dialog
  - TopTabs - Tabs at the top of page
- layouts (layout of sections)
  - Body - Layout of the panel of the first tab (Charging station)
  - MainLayout - Maing layout of the page which placed sidenav and main content of page
- lib
  - firebase keys
- pages (different pages of the App)
  - Login page
  - Logout page
  - Register page
  - error page
- routes
- services

Made the page responsive with break points of tailwind <768px, 768px and 1024px

### Tradeoffs

- Login, logout, reigster pages were created with minimal styles as focus is on home page and its features
- Didn't use max-height for the home page as the content in home page is less and I want to keep it dependent on content rather than forcing externally
- Didn't optimize the app as app is already low in size. But there is option of optimizing the app by dynamic imports.

## Known limitations

- Chart line is not as shown in figma, as it needs more data points and other information
- Side Nav doesn't expand when clicked on menu-icon as I am not sure whether it is requirement or not
- Not responsive for all viewports
- Mimicked dropdown component (with styles) on charts as designs and information is not available

## Time Spent

- 2 hours on first day
- 4 hours on second day
- 10 hours on third day

## Local development instructions

- Fork repo, install packages and run command
- Register the user and login to see the home page

