# Data Viz App

## Flow of the App

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
- Hit /logout to log out the user

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
