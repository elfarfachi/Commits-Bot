const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";

/**
 * Makes a commit with a random date and pushes it to the remote repository.
 * @param {number} n - The number of commits to make.
 * @returns {Promise<void>} A promise that resolves when all commits are made and pushed.
 */
const makeCommit = async (n) => {
  if (n === 0) return simpleGit().push();
  const { default: random } = await import("random");
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const Date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: Date,
  };
  console.log(Date);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add(FILE_PATH)//add file to staging area
      .commit(Date, { "--date": Date }, makeCommit.bind(this, --n));//recursive call
  });
};

makeCommit(1000); // Make 1000 commits
