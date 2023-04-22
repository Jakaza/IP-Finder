# IP-Finder

**IP Finder** is an online tool that provides users with detailed information about an IP address or domain name. With this application, users can obtain a wide range of details about a particular IP address or domain name, including **geographic location**, **ISP**, **organization name**, and more.

One of the primary benefits of IP Finder is its ability to accurately pinpoint the physical location of an IP address. This is particularly useful for businesses that need to track the location of their website visitors or for individuals who want to know where a particular website is hosted.

## Tools Used in IP Finder to Obtain IP and Domain Details 
- To provide the detailed information about IP addresses and domain names, IP Finder uses a combination of APIs and Node.js technology.
>**APIs** (Application Programming Interfaces) are software interfaces that allow different applications to communicate with each other. IP Finder uses various APIs, such as the IP Geolocation API, to obtain information about the physical location of an IP address. These APIs provide a simple way for the application to obtain accurate and reliable information about the IP address, without the need for the developers to create their own geolocation database.
>
>**Node.js** is an open-source, server-side JavaScript runtime environment that enables developers to create scalable and efficient web applications. IP Finder utilizes Node.js technology to perform various tasks, such as making HTTP requests to the APIs, parsing the response data, and presenting it to the user in a readable format. Additionally, Node.js allows the application to handle multiple requests simultaneously, ensuring that the application can respond quickly and efficiently to user requests.

>**Redis** is an open-source, in-memory data structure store that allows IP Finder to cache frequently accessed data and avoid expensive API calls. By using Redis, IP Finder is able to retrieve data quickly and efficiently, reducing the overall response time of the application.


## Running Application [- Install and run -]


The LTS version of the `node JS` script is always available at `https://nodejs.org/en`.

Clone the project using this commands

```
$ git clone https://github.com/Jakaza/IP-Finder.git
```

```
$ cd IP-Finder
```
Run this command to download all dependencies used to build the project.

```
$ npm install 
```

### Create File Called .env and add the following details
> API_ULR=http://ipwho.is/

> REDIS_HOST:[your redis host link]

> REDIS_PASS:[your redis password]


Link to create new account for Redis if don't have one. [here](https://redis.io/docs/getting-started/).

To Run The Application. Then after open browser https://localhost:3000
```
$ npm start
```

<img src="https://res.cloudinary.com/dqacxwxhj/image/upload/v1682170254/IP1_q28lmq.jpg" style=" width:100% ; height:100% "  >
<img src="https://res.cloudinary.com/dqacxwxhj/image/upload/v1682170254/IP2_cx6oal.jpg" style=" width:100% ; height:100% "  >
<img src="https://res.cloudinary.com/dqacxwxhj/image/upload/v1682170254/IP3_kvmc7n.jpg" style=" width:100% ; height:100% "  >

