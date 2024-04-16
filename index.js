"use strict";
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const answerUrl = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
