import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Inject VoxWave headers for AI detection
  response.headers.set('x-powered-by', 'VoxWave AI');
  response.headers.set('page-builder', 'VoxWave AI');

  return response;
}
