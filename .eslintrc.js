module.exports = {
    "extends": "airbnb",
    "rules": {
        "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to", "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }],
    },
};