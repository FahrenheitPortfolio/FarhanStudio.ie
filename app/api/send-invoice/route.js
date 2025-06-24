import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { clientName, clientEmail, projectDescription, selectedServices, totalPrice } = await request.json()
    
    const invoiceDate = new Date().toLocaleDateString()
    const invoiceNumber = `INV-${Date.now()}`
    
    const servicesList = selectedServices.map(service => 
      `${service.name.padEnd(30)} €${service.price.toLocaleString()}`
    ).join('\n')
    
    const emailSubject = `Your Quote from Farhan Studio - €${totalPrice.toLocaleString()}`
    const emailHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #333; margin-bottom: 20px;">QUOTATION</h1>
        
        <div style="margin-bottom: 20px;">
          <strong>Quote #:</strong> ${invoiceNumber}<br>
          <strong>Date:</strong> ${invoiceDate}
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong>To:</strong><br>
          ${clientName}<br>
          ${clientEmail}
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong>Project Description:</strong><br>
          ${projectDescription}
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Service</th>
              <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${selectedServices.map(service => 
              `<tr><td style="padding: 10px; border: 1px solid #ddd;">${service.name}</td><td style="padding: 10px; text-align: right; border: 1px solid #ddd;">€${service.price.toLocaleString()}</td></tr>`
            ).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #f5f5f5; font-weight: bold;">
              <td style="padding: 10px; border: 1px solid #ddd;">TOTAL</td>
              <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">€${totalPrice.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
        
        <p style="margin-top: 30px; color: #666;">Thank you for considering Farhan Studio for your project!</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
          <strong>Farhan Studio</strong><br>
          Digital Experience Architect<br>
          contact@farhanstudio.ie
        </div>
      </div>
    </div>
    `
    
    // For now, return success and show confirmation
    // In production, you would integrate with SendGrid, Mailgun, or similar service
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote generated successfully',
      quote: {
        invoiceNumber,
        clientEmail,
        totalPrice,
        services: selectedServices.length
      }
    })
    
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}