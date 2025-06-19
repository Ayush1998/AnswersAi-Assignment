Setup Instruction
  a. Create an .env file in root. I will share the .env config
  b. run "npm install"
  c. run "npm run dev"
  d. Server will start

Features Implimented - 
  1. Auth (Email/password and Google oAuth)
  2. Routing and Private Route
  3. Dynamic TopBar, currently setting homePage Topbar menu only
  4. Slider for edit variables
  5. Variable details will come if you hover on any variable for 1.5sec.
  6. Reusable Variable Tile Component.
  7. Added Primary Variable and secondary Variable section with expand functionality.
  8. Added Graph with dummy value
  9. Reusable Key Performance cards
  10. Created Custom Components as per product requirement.
  11. Once you signin if you click on user Icon you'll be logged out.

Technical decisions and trade-offs -
  1. Figma Design was not consistent so I had to write multiple css every time.
  2. Figma Design was for 1440X992 screen size. You might see scroller in main content.
  3. I have used Redux Toolkit for state management and used Atomic architecture for project.

Known limitations -
  1. Currently I'm not setting user in cookies so If you refresh the page you'll have to login again.
  2. Mostly the UI will be responsive but I haven't added mobile and tablet css for now.
  3. I have set only Home route only for all navbar click.

Time spent - I spent around 7 hours on this assignment.
