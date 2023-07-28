# Midterm

## Database Structure

The project has one database called gigih. The gigih database has three collections:

- videos
- products
- comments

The video collection has a four fields:

- title
- videoUrl
- thumbUrl
- uploader

The product collection has a five fields:

- productID
- productUrl
- title
- price
- video_id (ref)

The last collection is comments, the comments collection has four fields:

- username
- content
- timestamp
- video_id (ref)

For the product and comment collection has an additional field called video_id. The field purpose is to point which video has the product and the comment.

## API Structure

The project used clean architecture (controller, service, repository). Every collection has a mongoose model representation and each model has their own repository.

Beside repositories, clean architecture also has services and controllers. Every repository in the project connect with a service as a result service can reach data on repository. The service also connect with a controller. When the controller receive a request from the client, the controller will call a service, the service will then do the business logic, then will call repositories to get some data or persist some changes. The repositories will then return some data to the service, which also give a controller data to appropriately make the correct response.

## API

### **GET /video**

---

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  "status" : "success",
  videos: [
           {<videos_object>},
           {<videos_object>},
           {<videos_object>}
         ]
}

```

- **When Videos is Empty**
  - **Code:** 200

```
  {
    "message" :"There are no videos yet."
     videos: []
  }
```

### **GET /video/:id/products**

---

Returns all Product from Videos.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**

  **Status : Success**

- **Code:** 200  
  **Content:**

```
{
  pruduct: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

- **Error Response:**
- **Code:** 400

```
  {
    "status": "error"
    "message": "bad request id"
  }
```

OR

- **Empty Database**

```
  {
    "status": "error"
    "message" :"No products found for this video id: ${videoId}"
  }
```

OR

- **Code:** 500

```
  {
    "status": "error"
    "message": "error message"
  }
```

### **POST /videos/:id/comments**

---

Creates a new comments returns the new object.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
  {
    username: string,
    content: string,
    timestamp: date,
    video_id: ObjectId
  }
```

- **Success Response:**
- **Code:** 200

```
  {
    "status": "success"
    "message":  "comment successfully posted"
  }

```

- **Error Response:**
- **Code:** 500

```
  {
    "status": "error"
    "message" :"error message"
  }
```

### **GET /videos/:id/comments**

---

Return all comments for the video.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200

```
{
  "status": "success" ,
  "message":  "comment successfully posted",
  comments: [
           {<comments_object>},
           {<comments_object>},
           {<comments_object>}
         ]
}
```

- **Error Response:**
- **Empty Database**

```
  {
    "status": "error"
    "message" :"No products found for this video id: ${videoId}"
  }
```

OR

- **Code:** 500

```
  {
    "status": "error"
    "message": "error message"
  }
```

## How to Run in Local

## How to run project locally (Windows)

1. You need to have mongodb server installed on your local machine. On windows, installing MongoDB community edition from https://www.mongodb.com/try/download/community-edition
   will provide you with the server.

2. You also need to have node and npm installed.

3. Configure your path variable to run mongod.exe from the terminal or run the mongod.exe via the windows GUI on the recently installed mongodb folder. If mongod.exe fails to run the server, make sure you have `C:\data\db` directory. This is the default directory where mongodb will store it's database data.

**IMPORTANT**: Make sure mongod.exe (mongodb daemon / server) successfully run without problems before going onto the next step.

4. Make sure port 27017 is not used on your machine.

5. Clone the project, then run `npm install` on the terminal. Make sure you're in the root directory of the project.

6. Once you successfully added the dependencies of the project, still in root directory, you can now type node `/index.js rest`. The backend server will now ready to listen to request. Horray!
