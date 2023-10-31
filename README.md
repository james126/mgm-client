<!-- Heading start-->
<h1 align="center"> mgm-client </h1> <br>

<div align="center">
    <picture>
        <img src="src/assets/image/man.png" align="center" width="10%" height="10%" alt="">
    </picture>
</div>

<p align="center">
  Front-end Angular app
</p>

<div align="center">
<picture>
	<img alt="" title="" src="readme/angular.png" align="center" width="5%" height="5%">
</picture>
<picture>
	<img alt="" title="" src="readme/aws.png" align="center" width="5%" height="5%">
</picture>
<picture>
	<img alt="" title="" src="readme/ubuntu.png" align="center" width="5%" height="5%">
</picture>
</div>

<div align="center">

[https://mrgrassmaster.com](https://mrgrassmaster.com)

</div>
<!-- Heading end-->


<!-- Contents start-->

## Contents

- [Demo](#demo)
- [Angular](#angular)
- [Hosting](#hosting)
- [Dependencies](#dependencies)
- [Learning interesting stuff](#interesting)
- [Screenshots](#screenshots)
- [Backlog](#backlog)
- [Version](#version)

<!-- Contents end-->


<a name="demo"></a>

## Demo

NB: Currently, cookies must be enabled on the browser for JWT authentication<br>
[https://mrgrassmaster.com/](https://mrgrassmaster.com/)

<a name="angular"></a>

## Angular details

- *HTTP requests*
	- Made to mgm-server which is located on a different server (server.mrgrassmaster.com)
		- data sent in JSON format
		- catches any errors submitting the request, then sends another request to mgm-server to log error details to file
		  <br></br>

- *Index page*
	- Submits contact form
		- contains form for customer enquiries
		- validates and submit form data
		  <br></br>

- *Login Page*
    - Login module is lazy loaded
    - Submits login request
		- validates and submits user details
		- login successful → redirects to admin page and displays content received from http response
		- login unsuccessful → prompts user to enter correct details
		  <br></br>

- *Admin Page*
    - Admin module is lazy loaded
	- Displays data contact form details recieved from mgm-server
		- view-next button → submits a request to view the next form
		- delete button → submits a request to delete this form
		- logout → logs the user out by overwriting the authenticated JWT token
		  <br></br>

- Unit Tests
	- Mocks http requests and check their method, body and result
	  <br></br>

<a name="hosting"></a>

## Hosting details

App is served from AWS ec2 virtual instance<br/>
AWS Route53 routes requests for mrgrassmaster.com

- **ec2 details**
	- instance type t3a.nano (small and cheap) 
        - ubuntu
		- 500MB memory
		- 8GB HDD
		  <br><br>
	- install npm, nginx, certbot
	- add Angular build and SSL certificate files generated using certbot
	  <br><br>
	- nginx configuration
		- server name mrgrassmaster.com
		- enable ssl
		- reverse proxy details to enable http requests to mgm-server
		- ssl certificate and key to reference files added
		- redirect www.mrgrassmaser to https://mrgrassmaster.com
		  <br><br>
	- configure firewall
        - enable ssh, http, https

## Backlog

- [x] Custom authentication
- [x] Custom authorisation
- [x] On login redirect to admin page
- [x] On login receive JWT cookie
- [x] On login load server objects into page
- [x] View next form http request to sever and handling
- [x] Delete form http request to sever and handling
- [x] Logout functionality
- [x] Logging to replace console.log statements
- [x] Lazy loading for LoginModule and AdminModule
- [x] Unit testing
- [ ] Customer login
- [ ] View customer accounts

### Deployment

- [x] ec2 instance
- [x] install nodejs, npm, nginx
- [x] nginx web server functionality
- [x] nginx reverse proxy functionality
- [x] SSL/https/domain routing
