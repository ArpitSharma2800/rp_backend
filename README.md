# Rich Panel Assignment Docs

## Postman docs 

Documentation for the following is given in the provided link:
- [x] (GET) get-all-posts
- [x] (POST) post-to-page
- [x] (GET) load-comments from a post


[postman link](https://documenter.getpostman.com/view/10262868/TzsYP9UP)

## Mongo DB Schema
``` js
payload = {
    name: res.name,
    image: res.picture.data.url,
    email: res.email,
    id: res.id,
    userId: res.userID
}
```

## Deprication !!

API for commenting has been depricated by [Facebook](facebook.com) therefore has not been integrated here

## Page Scoped ID bug

Due to time constraint and no docs on extracting PSID messenger functionality is not yet added but could be added in future release