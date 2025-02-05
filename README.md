# Instructions to Run the Web App

## JSON Server for Mock API

To set up and run the mock API, follow these steps:

### Install and Start `json-server`

Run the following command in your terminal:

```sh
npx json-server db.json
```

###  Handling CORS Errors

If you encounter CORS errors, use one of the following solutions:

- **Option 1 (Recommended):** Start `json-server` with CORS middleware:

  ```sh
  npx json-server --watch db.json --port 5000 --middlewares cors
  ```

- **Option 2:** Install and enable a **CORS extension** in your browser.

Now your mock API is ready to use!
