# Task 1
[ ] Make sure to use only 1 JDL file to generate Employee and Gateway service
[ ] Make sure using Spring Boot as backend code

[ ] Make sure using Angular as frontend code

[ ] Make sure Employee Entities description will be same as tables in hr DB (hr DB is default DB of Oracle Linux)
[ ] Make sure every API in RestController calls to Service Component, not Repository Component
[ ] Make sure every listing API can do pagination and sorting
[ ] Make sure API is protected by a gateway

[ ] Make sure CRUD API related to document is only valid for Role admin and employee
[ ] Make sure employee service use existing hr DB of Oracle XE as dev database

# Solution for task1
- Git init 
- Use Jhipster to genearate code
- Go through Employee.java and edit FK become correct 

# Task 1 Tips
- What is Jhipster Registry → Jhipster Registry is like a dictionary that help service can know some service's metadata such as (IP address, status) which is useful for service communication
- Running services without Jhipster-registry will lead to an error → Make sure you're running Jhipster registry before running services
- To map employee-service with existing oracle database → let modify data source in application-dev.yml (When running with ./mvnw command, Spring Boot will use dev profile this's a reason why we edit on that file)
- disable liquibase
