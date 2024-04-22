let dataArray = [];

const appStart = () => {
  console.log("I have started listening");
};

const runIndex = (request, response) => {
  // response.send({message: "Interesting things are about to happen"})
  response.render("index");
  // response.sendFile(__dirname + "/index.html");
  // response.status(503).json({ message: "Hello Olamilekan" });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.send("This is the Get User by Id for " + id);
};

const createUser = (req, res) => {
  dataArray.push(req.body);
  res.redirect("/account");
};

const viewUsers = (req, res) => {
  console.log("account triggeed");
  res.render("accout-created", { array: dataArray });
};
module.exports = { appStart, runIndex, getUserById, createUser, viewUsers };
