import { makeVar } from "@apollo/client";

const isLoggedInVar = makeVar(false);

const darkVar = makeVar(false);

export { isLoggedInVar, darkVar };
