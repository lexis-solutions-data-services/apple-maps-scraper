# Apple Maps Scraper

![banner](https://i.ibb.co/twHZJBb9/apple-maps-cover.png)

The **Apple Maps Scraper** is an Apify actor that extracts location data, businesses, landmarks, and points of interest from Apple Maps. It searches by query and returns comprehensive location information including addresses, coordinates, contact details, images, reviews, amenities, business hours, and more for deeper analysis.

<p align="center">
  <img src="https://apify-image-uploads-prod.s3.us-east-1.amazonaws.com/DevbkY3adMTBuoECt-actor-UDbbsr5jaiv9n1Ufv-z4fQcJB5UD-1_aQYc2lqVJ0030nd5HEu35w.jpg" alt="Apple Maps Scraper" style="height: 60px; margin-right: 15px;" /><a href="https://apify.com/lexis-solutions/apple-maps-scraper" target="_blank">
    <img src="https://img.shields.io/badge/Try%20it%20on-Apify-0066FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA4IiBoZWlnaHQ9IjQwOCIgdmlld0JveD0iMCAwIDQwOCA0MDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zNDFfNDE1NykiPgo8cGF0aCBkPSJNMjE4LjY5NSAxMDRIMzAwLjk3QzMwMi42NDMgMTA0IDMwNCAxMDUuMzU3IDMwNCAxMDcuMDNWMjMyLjc2NkMzMDQgMjM1Ljc3OCAzMDAuMDgzIDIzNi45NDUgMjk4LjQzNCAyMzQuNDI1TDIxNi4xNTkgMTA4LjY5QzIxNC44NDEgMTA2LjY3NCAyMTYuMjg3IDEwNCAyMTguNjk1IDEwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xODkuMzA1IDEwNEgxMDcuMDNDMTA1LjM1NyAxMDQgMTA0IDEwNS4zNTcgMTA0IDEwNy4wM1YyMzIuNzY2QzEwNCAyMzUuNzc4IDEwNy45MTcgMjM2Ljk0NSAxMDkuNTY2IDIzNC40MjVMMTkxLjg0IDEwOC42OUMxOTMuMTU5IDEwNi42NzQgMTkxLjcxMyAxMDQgMTg5LjMwNSAxMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAyLjU5MSAyMDQuNjY4TDEwOS4xMjcgMjk4LjgzNUMxMDcuMjI5IDMwMC43NDcgMTA4LjU4MyAzMDQgMTExLjI3OCAzMDRIMjk2LjhDMjk5LjQ4MyAzMDQgMzAwLjg0MiAzMDAuNzcgMjk4Ljk2NyAyOTguODUyTDIwNi45MDggMjA0LjY4NUMyMDUuNzI2IDIwMy40NzUgMjAzLjc4MiAyMDMuNDY4IDIwMi41OTEgMjA0LjY2OFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzQxXzQxNTciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNCAxMDQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==&logoColor=white" alt="Try it on Apify" style="border-radius: 12px; height: 60px;" />
  </a>
</p>


---


## 📊 Actor Stats

| Stat | Value |
|------|-------|
| **Version** | `0.1.1` |
| **Last Update** | Dec 1, 2025 |

---



## 💻 Integration Examples

This repository includes example code showing how to integrate the `apple-maps-scraper` actor into your projects.

You can find example implementations in the [`examples/`](./examples) folder:
- **TypeScript/JavaScript**: See [`examples/typescript/`](./examples/typescript) for a complete TypeScript example
- **Python**: See [`examples/python/`](./examples/python) for a complete Python example

Each example includes:
- Ready-to-use code templates
- Setup instructions
- Documentation links

---


## ✨ Key Features

- **Flexible query search**: Search for any location, business, landmark, or point of interest using natural language queries.
- **Comprehensive location data**: Extract detailed information including addresses, coordinates, phone numbers, websites, and business hours.
- **Rich media support**: Collect images, ratings, reviews, and vendor information for each location.
- **Category classification**: Get main categories and subcategories for better organization and filtering.

---

## 💡 Why It's Important

Apple Maps provides detailed location and business information integrated with Apple's ecosystem. With this actor, you can:

- **Discover and analyze locations** across any region or city worldwide.
- **Extract business intelligence** including contact information, operating hours, and amenities.
- **Automate location data collection** for mapping, analysis, and business intelligence purposes.

---

## 👤 Who Is It For?

This actor is a great fit for:

- **Business intelligence and market researchers** analyzing local business data and locations.
- **Data teams and developers** building location-based applications and services.
- **Travel and hospitality companies** curating location information for their platforms.

---

## 🚀 Business Use Cases

- **Location data aggregation**: Collect comprehensive location information for mapping and geospatial analysis.
- **Business directory building**: Extract contact details, addresses, and business information for directories.
- **Competitive intelligence**: Analyze location distribution, amenities, and ratings across different regions.

---

## 🛠 Input Schema

```json
{
  "query": "The Pyramids", // Required: location query
  "proxyConfiguration": {
    // Optional: Apify proxy configuration
    "useApifyProxy": false
  }
}
```

Notes:

- Required: `query`.
- Use `proxyConfiguration` for Apify proxy settings.

---

## ⚠️ Important: Proxy Configuration

**The proxy configuration set for a specific country impacts the search results**, as Apple Maps search always returns nearby places based on the proxy's geographic location.

To get location-specific results, configure your proxy to match the target country or region. For example:

- To search for locations in France, use a proxy configured for France
- To search for locations in the USA, use a proxy configured for the USA

This ensures you receive the most relevant and geographically accurate search results.

---

## 📦 Output Schema

The actor returns location data with comprehensive information for each search result:

```json
{
  "id": "IED10F53B2E30A0CD",
  "name": "Great Pyramid of Giza",
  "secondaryName": "هرم خوفو",
  "description": "The Great Pyramid of Giza is the largest Egyptian pyramid. It served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built c. 2600 BC, over a period of about 26 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. It is the most famous monument of the Giza pyramid complex, which is part of the UNESCO World Heritage Site \"Memphis and its Necropolis\".",
  "appleMapsUrl": "https://maps.apple.com/place?place-id=IED10F53B2E30A0CD",
  "vendor": {
    "name": "siri_kg",
    "url": "https://ar.wikipedia.org/wiki/الهرم_الأكبر"
  },
  "mainPhoneNumber": "+20227354532",
  "phoneNumbers": ["+20227354532"],
  "website": "https://egymonuments.gov.eg/en/monuments/the-great-pyramid",
  "mainCategory": "Landmark",
  "categories": ["travel_and_leisure", "historic_landmark"],
  "mainImage": "https://irs1.4sqi.net/img/general/original/2663822_UI9Bx-WqZEPyUQbjcvc2WYxRpSItcUd5Qb05aExgJdk.jpg",
  "images": [
    "https://irs1.4sqi.net/img/general/original/2663822_UI9Bx-WqZEPyUQbjcvc2WYxRpSItcUd5Qb05aExgJdk.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/nofVQGUj3vSBpj0IO43ULw/1284x1284bb.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Jh9N5uz3XqNBt6SDSRuMWg/1284x1284bb.jpg"
  ],
  "rating": 4.25,
  "reviews": [
    {
      "snippet": "The setting was beautiful, the garden in particular. The staff was really friendly and Hady was very kind and helpful. It was great value for money with a wonderful view of the Great Pyramid.",
      "reviewTime": "2025-05-05T00:00:00.000Z",
      "reviewer": {
        "name": "anonymous"
      },
      "reviewId": "5154853675",
      "rating": {
        "ratingType": "USER_RATING",
        "score": 4,
        "maxScore": 5
      }
    }
  ],
  "businessAvailability": {
    "days": [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY"
    ],
    "hours": {
      "dayStartHour": 8,
      "dayEndHour": 16
    }
  },
  "externalLinks": [
    "https://viator.com/app-clip/d23032-a1506",
    "https://tiqets.com/appclip/venue/169240?partner=95014"
  ],
  "summarizedAddress": "Great Pyramid of Giza, Giza, Egypt",
  "address": {
    "country": "Egypt",
    "countryCode": "EG",
    "administrativeArea": "Giza",
    "locality": "Giza",
    "postCode": "12557",
    "subLocality": "Nazlet Al Siman And Al Sisi",
    "thoroughfare": "Al Amira Ferbal Street",
    "subThoroughfare": "11",
    "fullThoroughfare": "Al Amira Ferbal Street 11",
    "areaOfInterest": ["Great Pyramid of Giza", "Giza Necropolis"],
    "dependentLocality": [
      "Nazlet Al Siman And Al Sisi",
      "Al Amrania",
      "Pyramids"
    ],
    "subPremise": [],
    "geoId": [],
    "_unknownFields": {}
  },
  "coordinates": {
    "latitude": 29.9789881,
    "longitude": 31.13432
  },
  "amenities": [
    {
      "key": "accessibleWheelchair",
      "name": "Wheelchair Accessible",
      "category": [
        "crossbusiness",
        "accessibility_features",
        "wheelchair_accessible"
      ]
    },
    {
      "key": "person.3.fill",
      "name": "Good for Groups",
      "category": ["crossbusiness", "goodfor", "groups"]
    }
  ]
}
```

### Output Fields Description

- **id**: Unique Apple Maps place identifier
- **name**: Primary name of the location
- **secondaryName**: Alternative name (often in a different language or script)
- **description**: Detailed description often sourced from Wikipedia or other knowledge bases
- **appleMapsUrl**: Direct link to view the location in Apple Maps
- **vendor**: Information about the data source (e.g., Siri Knowledge Graph, Booking.com)
- **mainPhoneNumber**: Primary contact phone number
- **phoneNumbers**: Array of all associated phone numbers
- **website**: Official website URL
- **mainCategory**: Primary category classification (e.g., Landmark, Hotel, Restaurant)
- **categories**: Array of category tags for classification
- **mainImage**: Primary image URL
- **images**: Array of image URLs
- **rating**: Numeric rating (if available)
- **reviews**: Array of review objects with snippets, ratings, reviewers, and timestamps
- **businessAvailability**: Operating schedule with days and hours
- **externalLinks**: Links to third-party services (e.g., booking sites, review platforms)
- **summarizedAddress**: Human-readable address summary
- **address**: Detailed address object with country, region, locality, street, postal code, and more
- **coordinates**: Geographic coordinates (latitude, longitude)
- **amenities**: Array of amenities with keys, names, and category classifications

👀 p.s.

Got feedback or need an extension?

Lexis Solutions is a [certified Apify Partner](https://apify.com/partners/find). We can help you with custom solutions or data extraction projects.

Contact us over [Email](mailto:scraping@lexis.solutions) or [LinkedIn](https://www.linkedin.com/company/lexis-solutions)

## Support Our Work 💝

If you're happy with our work and scrapers, you're welcome to leave us a company review [here](https://apify.com/partners/find/lexis-solutions/review) and leave a review for the scrapers you're subscribed to. It will take you less than a minute but it will mean a lot to us!

Image Credit: https://www.apple.com/maps/
