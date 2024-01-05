import { SignJWT, jwtVerify } from "jose";

let key = new TextEncoder().encode(process.env.JOSE_SECRET);

export const encodeToken = async (id, email) => {
  let token = await new SignJWT({ id: id, email: email })
    .setProtectedHeader({ alg: process.env.JOSE_ALGORITHM })
    .setIssuedAt()
    .setIssuer(process.env.JOSE_ISSUER)
    .setExpirationTime(process.env.JOSE_EXPIRATION)
    .sign(key);
  return token;
};
export const decodeToken = async (token) => {
  let decoded = await jwtVerify(token, key);
  return decoded["payload"];
};
