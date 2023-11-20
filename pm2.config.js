module.exports = {
    apps : [
      {
        name      : "Test",
        script    : "npx",
        interpreter: "none",
        args: "serve -s build -p 3010"
      }
    ]
  }