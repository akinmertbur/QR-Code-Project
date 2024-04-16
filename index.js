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

    var qr_svg = qr.image(answerUrl);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
