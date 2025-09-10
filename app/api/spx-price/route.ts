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
    const isMarketOpen = day >= 1 && day <= 5 && hour >= 9 && hour < 16;
    
    // Get previous trading day for closed market data
    const prevDay = new Date(easternTime);
    if (day === 1) { // Monday
      prevDay.setDate(prevDay.getDate() - 3); // Friday
    } else if (day === 0) { // Sunday
      prevDay.setDate(prevDay.getDate() - 2); // Friday
    } else {
      prevDay.setDate(prevDay.getDate() - 1); // Previous day
    }
    
    const dateStr = prevDay.toISOString().split('T')[0];
    
    let url: string;
    
    if (isMarketOpen) {
      // Get real-time data during market hours
      url = `https://api.polygon.io/v2/aggs/ticker/I:SPX/prev?adjusted=true&apikey=${POLYGON_API_KEY}`;
    } else {
      // Get previous close data when market is closed
      url = `https://api.polygon.io/v2/aggs/ticker/I:SPX/range/1/day/${dateStr}/${dateStr}?adjusted=true&sort=asc&limit=1&apikey=${POLYGON_API_KEY}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Polygon API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('No SPX data available');
    }
    
    const result = data.results[0];
    const price = result.c; // Close price
    const open = result.o; // Open price
    const change = price - open;
    const changePercent = (change / open) * 100;
    
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
