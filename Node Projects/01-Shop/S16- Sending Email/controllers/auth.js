const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const User = require("../models/user");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "mahmoud.7li123@gmail.com",
    pass: "LXdJ5HszKc71bx2k",
  },
});

exports.getLogin = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    errorMessage: message,
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    errorMessage: message,
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        req.flash("error", "Invalid email or password.");
        return res.redirect("/login");
      }
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save((err) => {
              console.log(err);
              res.redirect("/");
            });
          }
          req.flash("error", "Invalid email or password.");
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        req.flash("error", "E-Mail exists already.");
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] },
          });
          return user.save();
        })
        .then((result) => {
          res.redirect("/login");

          const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
          const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

          emailCampaigns.name = "Campaign sent via the API";
          emailCampaigns.subject = "My subject";
          emailCampaigns.sender = {
            name: email,
            email: email,
          };
          emailCampaigns.type = "classic";

          emailCampaigns.htmlContent =
            "Congratulations! You successfully sent this example campaign via the Brevo API.";

          emailCampaigns.recipients = { listIds: [2, 7] };

          emailCampaigns.scheduledAt = new Date().toISOString();

          apiInstance
            .createEmailCampaign(emailCampaigns)
            .then(function (data) {
              console.log("API called successfully. Returned data: " + data);
            })
            .catch(function (error) {
              console.error(error);
            });

          return transporter.sendMail({
            to: email,
            from: "mahmoud.aboalela2786@gmail.com",
            subject: "Signup succeeded!",
            html: "<h1>You successfully signed up!</h1>",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
