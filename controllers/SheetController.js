require('dotenv').config();
const {google} = require('googleapis');

const sheets = google.sheets({version: 'v4', auth: `${process.env.GOOGLE_API_KEY}`, headers: {Authorization: `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`}});


module.exports = {
    writeSheet: async (values) => {
        try {
            const result = await sheets.spreadsheets.values.update({
                spreadsheetId: `${process.env.SPREADSHEET_ID}`,
                range: `${process.env.RANGE}`,
                valueInputOption: 'RAW',
                resource: {
                    values
                },
            });
            
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
}