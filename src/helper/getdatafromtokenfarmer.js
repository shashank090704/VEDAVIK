import jwt from "jsonwebtoken";

export async function Getdatafrmtf(request) {
    try {
        const token = await request.cookies.get("farmertoken").value ||'';
        const decodedtoken = await jwt.verify(token , process.env.TOKEN_SECREAT);
        return decodedtoken.id;
    } catch (error) {
        throw new   Error(error.message);
    }
}