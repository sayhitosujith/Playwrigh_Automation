export async function formatAPIRequest(template: string,values: any[]): Promise<string> {
    // Replace placeholders in the template with actual values
    return template.replace(/{(\d+)}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        return index < values.length ? String(values[index]) : match;
    }); 
}

export async function getPOSTAPIRequestBody(fname:string, lname:string, Price:number, depositpaid:boolean, 
    additionalneeds:string, checkin:string, checkout:string){
    // Create a JSON object with the provided values

    const apiRequest : BookingAPI = {
        firstname: fname,
        lastname: lname,
        totalprice: Price,
        depositpaid: depositpaid,
        bookingdates: {
            checkin: checkin,
            checkout: checkout
        },
        additionalneeds: additionalneeds
    };

    // Convert the JSON object to a string
    return apiRequest;
}