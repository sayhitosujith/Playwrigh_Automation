export async function formatAPIRequest(template: string,values: any[]): Promise<string> {
    // Replace placeholders in the template with actual values
    return template.replace(/{(\d+)}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        return index < values.length ? String(values[index]) : match;
    }); 
}

