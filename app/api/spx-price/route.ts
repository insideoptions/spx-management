import { NextResponse } from 'next/server';

const POLYGON_API_KEY = '8sphNbdn_3hpMn3pOclzACAgKNLpP2Nm';

export async function GET() {
  try {
    console.log('SPX API called at:', new Date().toISOString());
    
    // Get current date for market hours check
    const now = new Date();
    const easternTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const hour = easternTime.getHours();
    const day = easternTime.getDay();
    
    console.log('Market check - Hour:', hour, 'Day:', day);
    
    // Market is open Monday-Friday 9:30 AM - 4:00 PM ET
    const minute = easternTime.getMinutes();
    const isMarketOpen = day >= 1 && day <= 5 && 
      ((hour === 9 && minute >= 30) || (hour >= 10 && hour < 16));
    
    // Use different endpoints based on market status
    let currentUrl;
    
    if (isMarketOpen) {
      // During market hours, get current day's data (today's trading data)
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      
      currentUrl = `https://api.polygon.io/v2/aggs/ticker/I:SPX/range/1/minute/${dateStr}/${dateStr}?adjusted=true&sort=desc&limit=1&apikey=${POLYGON_API_KEY}`;
    } else {
      // After hours, get today's closing data (not previous day)
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      
      currentUrl = `https://api.polygon.io/v2/aggs/ticker/I:SPX/range/1/day/${dateStr}/${dateStr}?adjusted=true&apikey=${POLYGON_API_KEY}`;
    }
    
    // Fetch current day data
    console.log('Fetching from URL:', currentUrl);
    const response = await fetch(currentUrl);
    
    if (!response.ok) {
      console.error('Polygon API error:', response.status, response.statusText);
      throw new Error(`Polygon API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Polygon API response:', JSON.stringify(data, null, 2));
    
    let price;
    
    if (isMarketOpen) {
      // Handle live minute data structure
      if (!data.results || data.results.length === 0) {
        throw new Error('No live SPX data available');
      }
      const result = data.results[0];
      price = result.c; // Most recent close price from minute data
    } else {
      // Handle today's daily data structure (market closed)
      if (!data.results || data.results.length === 0) {
        throw new Error('No SPX data available');
      }
      const result = data.results[0];
      price = result.c; // Today's close price
    }
    
    // Get previous close dynamically
    let prevClose = 6512.62; // Updated fallback to yesterday's close
    
    if (isMarketOpen) {
      // For live data, we need to get yesterday's close for comparison
      try {
        const prevUrl = `https://api.polygon.io/v2/aggs/ticker/I:SPX/prev?adjusted=true&apikey=${POLYGON_API_KEY}`;
        const prevResponse = await fetch(prevUrl);
        if (prevResponse.ok) {
          const prevData = await prevResponse.json();
          if (prevData.results && prevData.results.length > 0) {
            prevClose = prevData.results[0].c;
          }
        }
      } catch (error) {
        console.log('Could not fetch previous close, using fallback');
      }
    } else {
      // For after-hours, we need to get the previous trading day's close for comparison
      // The current "price" is today's close, so we compare against yesterday's close
      try {
        // Get the day before the current close for proper change calculation
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        // If yesterday was weekend, go back to Friday
        while (yesterday.getDay() === 0 || yesterday.getDay() === 6) {
          yesterday.setDate(yesterday.getDate() - 1);
        }
        
        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;
        
        const prevUrl = `https://api.polygon.io/v2/aggs/ticker/I:SPX/range/1/day/${dateStr}/${dateStr}?adjusted=true&apikey=${POLYGON_API_KEY}`;
        const prevResponse = await fetch(prevUrl);
        if (prevResponse.ok) {
          const prevData = await prevResponse.json();
          if (prevData.results && prevData.results.length > 0) {
            prevClose = prevData.results[0].c;
          }
        }
      } catch (error) {
        console.log('Could not fetch previous trading day close, using fallback');
      }
    }
    
    const change = price - prevClose;
    const changePercent = (change / prevClose) * 100;
    
    // I:SPX is already the actual SPX index, no conversion needed
    return NextResponse.json({
      price: price,
      change: change,
      changePercent: changePercent,
      isMarketOpen: isMarketOpen
    });
    
  } catch (error) {
    console.error('Error fetching SPX data:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to fetch SPX data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
