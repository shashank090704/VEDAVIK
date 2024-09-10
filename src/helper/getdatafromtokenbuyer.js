import jwt from "jsonwebtoken";

export async function Getdatafrmtb(request) {
    try {
        const token = await request.cookies.get("buyertoken").value ||'';
        const decodedtoken = await jwt.verify(token , process.env.TOKEN_SECREAT);
        return decodedtoken.id;
    } catch (error) {
        throw new   Error(error.message);
    }
}