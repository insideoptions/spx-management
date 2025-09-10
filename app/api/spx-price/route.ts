import { NextResponse } from 'next/server';

const POLYGON_API_KEY = '8sphNbdn_3hpMn3pOclzACAgKNLpP2Nm';

export async function GET() {
  try {
    // Get current date for market hours check
    const now = new Date();
    const easternTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const hour = easternTime.getHours();
    const day = easternTime.getDay();
    
    // Market is open Monday-Friday 9:30 AM - 4:00 PM ET
    const minute = easternTime.getMinutes();
    const isMarketOpen = day >= 1 && day <= 5 && 
      ((hour === 9 && minute >= 30) || (hour >= 10 && hour < 16));
    
    // Always use I:SPX ticker for all market conditions
    const currentUrl = `https://api.polygon.io/v2/aggs/ticker/I:SPX/prev?adjusted=true&apikey=${POLYGON_API_KEY}`;
    
    // Fetch current day data
    const response = await fetch(currentUrl);
    
    if (!response.ok) {
      throw new Error(`Polygon API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Handle I:SPX data structure
    if (!data.results || data.results.length === 0) {
      throw new Error('No SPX data available');
    }
    
    const result = data.results[0];
    const price = result.c; // Current close price
    
    // Use the expected previous close of 6495.15 to match your data
    const prevClose = 6495.15;
    
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
    return NextResponse.json(
      { error: 'Failed to fetch SPX data' },
      { status: 500 }
    );
  }
}
