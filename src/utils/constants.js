const GOOGLE_API_KEY = "AIzaSyDORTOZFppssSPa0xeayniT14WFFtmKYOc";

export const YOUTUBE_VIDEOS_API = 
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
        "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 10;

function isPrime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
           return false;
          }
        }
        return true;
}
      
       //Function to find the nth prime number
export function findNthPrime(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
          if (isPrime(num)) {
           count++;
          }
          num++;
        }
        return num - 1;
}