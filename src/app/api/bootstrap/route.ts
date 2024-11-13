import { NextResponse } from 'next/server';
import { initiateBootstrapping } from '../../services/bootstrap';

export const maxDuration = 300;

// This route uses a "fire and forget" pattern in order to: 
// 1. Return a response to the client quickly 
// 2. Allow a long-running background task to complete
export async function POST() {
  console.log('POST request received');

  const pineconeIndex = process.env.PINECONE_INDEX as string;
  console.log('Pinecone Index:', pineconeIndex);

  try {
    await initiateBootstrapping(pineconeIndex);
    console.log('Bootstrapping initiated successfully');
  } catch (error) {
    console.error('Error initiating bootstrapping:', error);
  }

  console.log('Returning response to client');
  return NextResponse.json({ success: true }, { status: 200 });
}