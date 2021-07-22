const axios = require("axios");
exports.post_textual_data = async (req, res) => {
  var message = req.query.message;
  var token = req.query.token;
  var id = req.query.id;
  var config = {
    method: "post",
    url: `https://graph.facebook.com/v11.0/${id}/feed?message=${message}&access_token=${token}`,
    headers: {},
  };
  axios(config)
    .then(function (response) {
      return res.status(200).json({
        isSuccess: "true",
        message: `your pageid_postid is mentioned in response`,
        body: response.data,
      });
    })
    .catch(function (error) {
      return res.status(200).json({
        isSuccess: "false",
        message: `${error}`,
      });
    });
};

exports.get_posts_of_page = async (req, res) => {
  var token = req.query.token;
  var id = req.query.id;
  var config = {
    method: "get",
    url: `https://graph.facebook.com/v11.0/${id}/feed?&access_token=${token}`,
    headers: {},
  };
  axios(config)
    .then(function (response) {
      return res.status(200).json({
        isSuccess: "true",
        message: `your pageid_postid is mentioned in response`,
        body: response.data,
      });
    })
    .catch(function (error) {
      return res.status(200).json({
        isSuccess: "false",
        message: `${error}`,
      });
    });
};

exports.load_comments_from_a_post = async (req, res) => {
  var pageid_postid = req.query.pageid_postid;
  var token = req.query.token;
  var config = {
    method: "get",
    url: `https://graph.facebook.com/v11.0/${pageid_postid}/comments?access_token=${token}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      return res.status(200).json({
        isSuccess: "true",
        body: response.data,
      });
    })
    .catch(function (error) {
      return res.status(200).json({
        isSuccess: "false",
        message: `${error}`,
      });
    });
};
