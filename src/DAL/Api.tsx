const api_url = "https://data.gov.il/api/3/action/datastore_search";
const cities_resource = "d4901968-dad3-4845-a9b0-a57d027f11ab";
const streets_resource = "9ad3862c-8391-4b2f-84a4-2d4c68625f4b";

export const Api = {
    
    getCities: async (): Promise<void> => {
        return await fetch(`${api_url}?resource_id=${cities_resource}&limit=15000`)
                .then(res => res.json())
    },

    getStreets: async (cityName: string): Promise<void> => {
        const streetsInCity = await fetch(`${api_url}?resource_id=${streets_resource}&limit=32000&q={"שם_ישוב":"${cityName}"}`)
            .then(res => res.json())
        console.log(streetsInCity)
        return streetsInCity.result.records
    }
}