# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

### Q) What is the command to start the server?

(Default) `APIKEY=ss630745725358065467897349852985 npm run server`
(or `Set APIKEY=ss630745725358065467897349852985` in windows)

---

# General:

### Q) How long, in hours, did you spend on the test?

* Overengineering
We can extract to other libraries/npm packages the common eabstractions. The transport layer can be extracted, the entities/named reference data, the dtos, the output... in the end it will almost only hold the domain for this microservice (flight live prices). Also, this way we have code completation/intellisense which not only increases productivity and maintainability, it also reduces cognitive load.
* ZERO optimized!


### Q) If you had more time, what further improvements or new features would you add?

Duplicating entities (assigning references or using NRD/Registry)
GraphQL
TypeScript watch

### Q) Which parts are you most proud of? And why?

### Q) Which parts did you spend the most time with? What did you find most difficult?

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
