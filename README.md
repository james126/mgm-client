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
- [Screenshots](#screenshots)
<!-- Contents end-->



<a name="demo"></a>
## Demo

NB: Cookies must be enabled for JWT authentication<br>
<ul>
	<li><b>Front-end</b></li>
		<ul>
			<li>mgm-client</li>
			<li>mrgrassmaster.com</li>
		</ul>
</ul>
<ul>
	<li><b>Back-end</b></li>
		<ul>
			<li>mgm-server</li>
			<li>server.mrgrassmaster.com</li>
		</ul>
<br>
	<li>Both applications run on separate instances</li>
	<li>The back-end has a postgres database installed locall</li>
</ul>

[https://mrgrassmaster.com](https://mrgrassmaster.com)



<a name="angular"></a>
## Angular details

<ul>
	<li><b>Http requests</b></li>
		<ul>
			<li>Made to mgm-server which is located on a different server (server.mrgrassmaster.com)</li>
			<ul>
				<li>JSON body</li>
				<li>sends errors to mgm-server for logging</li>
			</ul>
		</ul>
</ul>

<ul>
	<li><b>Index page</b></li>
		<ul>
			<li>Submits form</li>
			<ul>
				<li>contact form for customer enquiries</li>
			</ul>
		</ul>
</ul>

<ul>
	<li><b>Login Page</b></li>
		<ul>
			<li>module lazy loaded</li>
			<li>Submits login requests</li>
			<ul>
				<li>login successful → to admin page</li>
				<li>login unsuccessful → prompts user</li>
			</ul>
		</ul>
</ul>

<ul>
	<li><b>Admin Page</b></li>
		<ul>
			<li>module lazy loaded</li>
			<li>Displays mgm-server data</li>
			<ul>
				<li>view-next → request to view the next form</li>
				<li>delete → request to delete this form</li>
				<li>logout → replaces authenticated JWT cookie with an unauthenticated one</li>
			</ul>
		</ul>
</ul>



<a name="hosting"></a>
## Hosting details

App is served from AWS ec2 virtual instance<br/>
AWS Route53 routes requests for mrgrassmaster.com

- **ec2 details**
	- instance type t3a.nano (small and cheap) 
        - `ubuntu`
		- 500MB memory
		- 8GB HDD
		  <br><br>
- **Install packages**
	- npm, `nginx`, certbot
    <br><br>
- **Add files**
	- add Angular build and SSL certificate files
	<br><br>
- **nginx configuration**
	- server name mrgrassmaster.com
	- enable ssl
	- reverse proxy to mgm-server
	- ssl certificate and key
	- redirect www.mrgrassmaser to https://mrgrassmaster.com
	<br><br>
- **Configure firewall**
    - enable ssh, http, https



<a name="screenshots"></a>

## Screenshots

### `Login`

[<img src="readme/login.png" width="100%"/>](src/main/resources/readme/login.png)
<br/><br/>

### `Invalid login`

[<img src="readme/invalid-login.png" width="100%"/>](src/main/resources/readme/invalid-login.png)
<br/><br/>

### `Admin`

[<img src="readme/admin.png" width="100%"/>](src/main/resources/readme/admin.png)
<br/><br/>

### `View next contact form`

[<img src="readme/admin-view-next.png" width="100%"/>](src/main/resources/readme/admin-view-next.png)
<br/><br/>

### `Delete contact form`

[<img src="readme/admin-delete.png" width="100%"/>](src/main/resources/readme/admin-delete.png)
<br/><br/>

### `All forms deleted`

[<img src="readme/all-deleted.png" width="100%"/>](src/main/resources/readme/admin-delete.png)
<br/><br/>
