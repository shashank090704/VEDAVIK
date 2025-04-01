import {NextResponse } from 'next/server'
export async function POST(request){

try {
    const response = NextResponse.json({
        message : "Logout succesfull",
        sucess : true
    })
    response.cookies.set('farmertoken', '',{
        httpOnly : true,
        expires : new Date(0)
    } )
    response.cookies.set('buyertoken', '',{
        httpOnly : true,
        expires : new Date(0)
    } )

    return response
} catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
    
}

}