module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "insclone",
      url: "http://localhost:4000/graphql",
    },
  },
};
