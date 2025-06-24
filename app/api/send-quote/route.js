import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { to, subject, html } = await request.json()
    
    // Simple email using mailto (opens client's email)
    // For production, integrate with Resend, SendGrid, or similar
    
    return NextResponse.json({ 
      success: true,
      mailto: `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(html.replace(/<[^>]*>/g, ''))}`
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process quote' }, { status: 500 })
  }
}