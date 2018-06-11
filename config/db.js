if (process.env.NODE_ENV === "production") {
    module.exports = {
      database:
        "mongodb://nandymandy:nandymandy123@ds119772.mlab.com:19772/mein-app",
      secret: "yoursecret"
    };
  } else {
    module.exports = {
      database: "mongodb://localhost:27017/rec-app",
      secret: "yoursecret"
    };
  }
  