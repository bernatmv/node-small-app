# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

Used mainly React, Backpack and Redux (also used some small libraries for utilities: query-string, uuid):

- React is a library for building the user interface, it has a more functional approach to it than other libraries and I really like it's declarative code.
- Redux is a library for state management. I follows the Flux principles (or The Elm Architechture design) of one-way data flow adding very nice debug tools on top (hot-reload and time-travel)
- Backpack: is a group of components for the UI created with react by Skyscanner

### Q) What is the command to start the server?

Go to the `server` folder, install and run:

`cd server`

`yarn` or `npm install`

(Default) `APIKEY=ss630745725358065467897349852985 npm run server` (also `npm start`, `yarn start` or `yarn server`)

### Q) What is the command to start the client?

Go to the `client` folder, install and run:

`cd client`

`yarn` or `npm install`

(Default) `npm run client` (also `npm start`, `yarn start` or `yarn client`)

---

# General:

### Q) How long, in hours, did you spend on the test?

I spent about 8-10 hours on the test (give or take).

Some considerations:

* Over-engineering: while the FE is pretty lightweight, the BE might be considered a bit over-engineered. When taking the task into consideration I had mainly 2 priorities on my head:
  1.- This is a technical task to demonstrate your capabilities. If this was a spike or as small a middleware as it's suggested, the approach might have been different favoring speed and simplicity.
  2.- Let's assume this is a small piece of software that will fit into a much large structure. From that point of view much of the server work makes sense (in my opinion, of course) if we take into account future work, integrations and enhancements. Furthermore, most of the code (everything not on the /api/) would be external re-usable components (dtos of the api, entities, reference data, services, etc) in the form of private npm packages that will help increase productivity on other parts of the ecosystem.

* TypeScript: might add a bit of verbosity, but will make everything more maintainable in the long run. It will also help reduce the cognitive load.

* ZERO optimized! I did not approach this task as if was a production application, we can improve the building process and the performance of the application beyond what it has right now.

* Testing: testing is deficient. Did some functional testing with Jest, but I did not add UT and E2E. Shame on me. This does not reflect how I think testing should be done in a project, but couldn't devote any more time into it.

* Building environment: I did my own building environment for the BE and updated the FE to create-react-app. This has led to a slightly different folder structure for the client.

### Q) If you had more time, what further improvements or new features would you add?

* First and foremost: more tests. UT with Tape and then maybe try Cucumber for funtional testing (have been wanting to try it for a while now). Finally, some E2E.

* Would have liked to try a version with GraphQL in the middleware, wrapping the Skyscanner API.

### Q) Which parts are you most proud of? And why?

* The server-side of things (client is a bit more of "redux-by-the-book"). It had a lot of work because I had to create dtos (interfaces) and entities for the Skyscanner API and my own input/output, but even if it's a bit verbose I think that it would be a good solution in a microservices environment to help improve productivity and reduce the cognative load.

### Q) Which parts did you spend the most time with? What did you find most difficult?

* Spend the most time building the working environment/build process for the server and the client. On the server I had to build it from scrtach for TypeScript, and in the client I had to rebuild it. The provided environment for the client was a bit outdated and had some difficulties.

* Also spent lot of time unraveling the Skyscanner react components and mapping the LivePrices API.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

I think the complexity and scope of the test is fairly good.
Enough help is provided on the description and the limitations (just display, no additional features, just one break-point) help make this achievable.

It helps a lot that you provide a kickstart (most helpful the client to connect to skyscanner), but it's a bit outdated for the FE. I would suggest updating the task with a new build process for the FE based on the skyscanner create react app (which is what I used in the end).

Also, unsure why favicon is ono of the "untouchable" files.
