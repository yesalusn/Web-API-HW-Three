'use strict';

var util = require('util');

module.exports =
{
  hello : hello
};

function getRepos(res)
{
  var GitHubApi = require('github');
  var github = new GitHubApi({
      version: "3.0.0"
  });
  var GithubToken = "<token>";
  github.authenticate({
      type : "oauth",
      token : GithubToken});
  var output = "";
  github.users.get({user : "yesalusn"},
      function(err, stuff)
      {
         github.repos.getAll({},
         function(err,otherstuff)
         {
           console.log("Was there a problem?");
           console.log("Was there a response?");
           res.json(otherstuff);
         });
      });
  return output;
};
function hello(req, res)
{
    getRepos(res);
};
