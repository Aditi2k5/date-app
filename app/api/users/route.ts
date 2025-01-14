import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    console.log('Connecting to database...');
    await dbConnect();
    
    const body = await request.json();
    console.log('Received profile data:', body);
    
    const userExists = await User.findOne({ email: body.email });
    if (userExists) {
      console.log('User already exists:', body.email);
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    
    console.log('Creating new user...');
    const user = await User.create(body);
    console.log('User created:', user);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({}).sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}