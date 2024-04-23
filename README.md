
# Automatic Git Commit Generator

## Overview
This script generates a series of commits to a Git repository, with commit dates spaced out over a year. It uses random dates within the past year to simulate commits.

## Prerequisites
Before running the script, ensure you have Node.js installed on your system.

## Installation
1. Create a `data.json` file in the same directory as your script.
2. Run the following commands in your terminal:
   ```
   npm init
   npm i jsonfile
   npm i moment
   npm i simple-git
   ```

## Usage
1. After completing the installation steps, run the script with the following command:
   ```
   node index.js
   ```
2. The script will start generating commits and pushing them to the repository. It will create a total of 1000 commits, each spaced out over a year.
3. You can adjust the number of commits generated by modifying the argument passed to the `makeCommit` function in `index.js`.

## Notes
- This script uses random dates within the past year to simulate commits. Therefore, running it multiple times will result in different commit histories.
- Ensure that you have appropriate permissions and access rights to push commits to the remote repository.
