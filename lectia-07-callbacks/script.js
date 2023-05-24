"use strict";

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return { completed, category, priority, ...data };
  // Change code above this line
}
