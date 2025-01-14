import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await dbConnect();
    console.log('Successfully connected to MongoDB');
    
    return NextResponse.json({ 
      status: 'Connected to MongoDB!',
      message: 'Database connection successful'
    });
  } catch (error) {
    console.error('Detailed connection error:', error);
    
    return NextResponse.json({ 
      error: 'Failed to connect to MongoDB',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    });
  }
} 

