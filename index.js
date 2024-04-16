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
    // Get input from the user-prompt
    const answerUrl = answers.URL;

    // Create qr-image
    var qr_img = qr.image(answerUrl);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));

    // Create qr_url txt file to save the user input
    fs.writeFile("qr_url.txt", answerUrl, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
